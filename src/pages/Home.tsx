import { useEffect, useRef } from 'react';
import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { nprogress } from '@mantine/nprogress';
import {
  Box,
  Button,
  Flex,
  Group,
  Input,
  Kbd,
  Loader,
  Text,
  Tooltip,
  VisuallyHidden,
  rem,
} from '@mantine/core';
import { useDebouncedState, useDisclosure, useHotkeys } from '@mantine/hooks';
import AppContainer from '../components/AppContainer';
import SendThoughtModal from '../components/SendThoughtModal';
import Thoughts from '../components/Thoughts';
import {
  fetchThoughts,
  getThoughtsCount,
  searchThoughts,
} from '../utils/thought';
import { IconCheck, IconMessage, IconSearch, IconX } from '@tabler/icons-react';
import { Timestamp } from 'firebase/firestore';
import { notifications } from '@mantine/notifications';

interface HomeProps {
  title: string;
}

const Home = ({ title }: HomeProps) => {
  const [messageOpen, { open, close, toggle }] = useDisclosure(false);

  const searchRef = useRef<HTMLInputElement>(null);
  const [searchBarValue, setSearchBarValue] = useDebouncedState('', 250);

  const {
    data,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isRefetching,
    isRefetchError,
  } = useInfiniteQuery({
    queryKey: ['thoughts'],
    initialPageParam: undefined,
    queryFn: async ({
      pageParam,
    }: QueryFunctionContext<QueryKey, Timestamp | undefined>) => {
      const thoughts = await fetchThoughts(pageParam);
      nprogress.complete();

      return thoughts;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) return undefined;

      return lastPage[lastPage.length - 1].createdAt;
    },
  });

  const { data: searchData, isFetching: isSearchFetching } = useQuery({
    queryKey: ['thoughts', 'search', searchBarValue],
    queryFn: async () => {
      if (!searchBarValue) return [];

      return searchThoughts(searchBarValue);
    },
    enabled: Boolean(searchBarValue),
  });

  const focusSearchBar = () => {
    searchRef.current?.focus();
  };

  useHotkeys([
    ['t', focusSearchBar],
    ['p', toggle],
  ]);

  const { data: thoughtsCountData, refetch: thoughtsCountRefetch } = useQuery({
    queryKey: ['thoughts', 'count'],
    queryFn: async () => {
      return await getThoughtsCount();
    },
  });

  //useEffect
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    function handleScroll() {
      if (isFetching) return;

      if (
        searchBarValue.length === 0 &&
        hasNextPage &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 500
      ) {
        fetchNextPage().catch((error) => {
          console.error(error);
        });
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFetching, fetchNextPage, hasNextPage, searchBarValue.length]);

  useEffect(() => {
    if (isRefetching) {
      notifications.show({
        id: 'refetch-thoughts',
        loading: true,
        title: 'Fetching new thoughts',
        message: 'Please wait...',
        autoClose: false,
        withCloseButton: false,
      });
    } else if (!isRefetchError) {
      notifications.update({
        id: 'refetch-thoughts',
        loading: false,
        icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
        title: 'Thoughts updated',
        message: 'New thoughts have been fetched',
        autoClose: 4000,
        withCloseButton: true,
      });
    } else {
      notifications.update({
        id: 'refetch-thoughts',
        loading: false,
        color: 'red',
        icon: <IconX style={{ width: rem(18), height: rem(18) }} />,
        title: 'Failed to reload thoughts',
        message: 'Please try again later',
        autoClose: 4000,
        withCloseButton: true,
      });
    }
  }, [isRefetching, isRefetchError]);

  const handleRefetch = () => {
    if (isFetching) return;

    refetch().catch(console.error);
    thoughtsCountRefetch().catch(console.error);
  };

  return (
    <AppContainer onRefetch={handleRefetch}>
      <Box mih="100dvh">
        {data && thoughtsCountData && (
          <Group mt="lg" justify="center" gap={5}>
            <IconMessage />

            <Text fz="md" fw="bold">
              {thoughtsCountData}{' '}
              <Text span c="blue.6" inherit>
                thoughts
              </Text>{' '}
              submitted
            </Text>
          </Group>
        )}

        <Flex my="lg" gap="md">
          <Input
            ref={searchRef}
            leftSection={<IconSearch size="1rem" />}
            rightSection={<Kbd>t</Kbd>}
            placeholder="Search for an author"
            onChange={(e) => setSearchBarValue(e.currentTarget.value)}
            styles={() => ({
              wrapper: {
                flex: 1,
              },
              rightSection: { pointerEvents: 'none' },
            })}
          />

          <Tooltip label={`Press "p" to post`} position="bottom">
            <Button rightSection={<IconMessage size="1em" />} onClick={open}>
              Post
            </Button>
          </Tooltip>
        </Flex>

        <VisuallyHidden component="h1">Posts</VisuallyHidden>

        {searchRef.current?.value
          ? searchData && <Thoughts thoughts={searchData} />
          : data && (
              <Thoughts
                thoughts={data.pages.reduce(
                  (acc, page) => acc.concat(page),
                  [],
                )}
              />
            )}

        <Group my="xl" h="2.25rem" justify="center">
          {(isFetching || isSearchFetching) && <Loader />}
        </Group>
      </Box>

      <SendThoughtModal open={messageOpen} onClose={close} />
    </AppContainer>
  );
};

export default Home;
