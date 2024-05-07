import { Anchor, Text, Title } from '@mantine/core';
import { useEffect } from 'react';
import AppContainer from '../components/AppContainer';

interface PrivacyPolicyProps {
  title: string;
}

function PrivacyPolicy({ title }: PrivacyPolicyProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <AppContainer>
      <Title my="lg" fw="bold" ta="center">
        PRIVACY POLICY
      </Title>
      <Text mt="md">Effective date: 2024-05-07</Text>
      <Text mt="md">
        1.{' '}
        <Text span fw="bold">
          Introduction
        </Text>
      </Text>
      <Text mt="md">
        Welcome to{' '}
        <Text span fw="bold">
          {' '}
          StickyThoughts
        </Text>
        .
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          StickyThoughts
        </Text>{' '}
        (“us”, “we”, or “our”) operates{' '}
        <Text span fw="bold">
          https://stickythoughts.alexndrho.dev/
        </Text>{' '}
        (hereinafter referred to as{' '}
        <Text span fw="bold">
          “Service”
        </Text>
        ).
      </Text>
      <Text mt="md">
        Our Privacy Policy governs your visit to{' '}
        <Text span fw="bold">
          https://stickythoughts.alexndrho.dev/
        </Text>
        , and explains how we collect, safeguard and disclose information that
        results from your use of our Service.
      </Text>
      <Text mt="md">
        We use your data to provide and improve Service. By using Service, you
        agree to the collection and use of information in accordance with this
        policy. Unless otherwise defined in this Privacy Policy, the terms used
        in this Privacy Policy have the same meanings as in our Terms and
        Conditions.
      </Text>
      <Text mt="md">
        Our Terms and Conditions (
        <Text span fw="bold">
          “Terms”
        </Text>
        ) govern all use of our Service and together with the Privacy Policy
        constitutes your agreement with us (
        <Text span fw="bold">
          “agreement”
        </Text>
        ).
      </Text>
      <Text mt="md">
        2.{' '}
        <Text span fw="bold">
          Definitions
        </Text>
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          SERVICE
        </Text>{' '}
        means the https://stickythoughts.alexndrho.dev/ website operated by
        StickyThoughts.
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          PERSONAL DATA
        </Text>{' '}
        means data about a living individual who can be identified from those
        data (or from those and other information either in our possession or
        likely to come into our possession).
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          USAGE DATA
        </Text>{' '}
        is data collected automatically either generated by the use of Service
        or from Service infrastructure itself (for example, the duration of a
        page visit).
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          COOKIES
        </Text>{' '}
        are small files stored on your device (computer or mobile device).
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          DATA CONTROLLER
        </Text>{' '}
        means a natural or legal person who (either alone or jointly or in
        common with other persons) determines the purposes for which and the
        manner in which any personal data are, or are to be, processed. For the
        purpose of this Privacy Policy, we are a Data Controller of your data.
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          DATA PROCESSORS (OR SERVICE PROVIDERS)
        </Text>{' '}
        means any natural or legal person who processes the data on behalf of
        the Data Controller. We may use the services of various Service
        Providers in order to process your data more effectively.
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          DATA SUBJECT
        </Text>{' '}
        is any living individual who is the subject of Personal Data.
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          THE USER
        </Text>{' '}
        is the individual using our Service. The User corresponds to the Data
        Subject, who is the subject of Personal Data.
      </Text>
      <Text mt="md">
        3.{' '}
        <Text span fw="bold">
          Information Collection and Use
        </Text>
      </Text>
      <Text mt="md">
        We collect several different types of information for various purposes
        to provide and improve our Service to you.
      </Text>
      <Text mt="md">
        4.{' '}
        <Text span fw="bold">
          Types of Data Collected
        </Text>
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          Personal Data
        </Text>
      </Text>
      <Text mt="md">
        While using our Service, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you (
        <Text span fw="bold">
          “Personal Data”
        </Text>
        ). Personally identifiable information may include, but is not limited
        to:
      </Text>
      <Text mt="md">0.1. Email address</Text>
      <Text mt="md">0.2. First name and last name</Text>
      <Text mt="md">0.3. Phone number</Text>
      <Text mt="md">
        0.4. Address, Country, State, Province, ZIP/Postal code, City
      </Text>
      <Text mt="md">0.5. Cookies and Usage Data</Text>
      <Text mt="md">
        We may use your Personal Data to contact you with newsletters, marketing
        or promotional materials and other information that may be of interest
        to you. You may opt out of receiving any, or all, of these
        communications from us by following the unsubscribe link.
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          Usage Data
        </Text>
      </Text>
      <Text mt="md">
        We may also collect information that your browser sends whenever you
        visit our Service or when you access Service by or through any device (
        <Text span fw="bold">
          “Usage Data”
        </Text>
        ).
      </Text>
      <Text mt="md">
        This Usage Data may include information such as your computer’s Internet
        Protocol address (e.g. IP address), browser type, browser version, the
        pages of our Service that you visit, the time and date of your visit,
        the time spent on those pages, unique device identifiers and other
        diagnostic data.
      </Text>
      <Text mt="md">
        When you access Service with a device, this Usage Data may include
        information such as the type of device you use, your device unique ID,
        the IP address of your device, your device operating system, the type of
        Internet browser you use, unique device identifiers and other diagnostic
        data.
      </Text>
      <Text mt="md">
        <Text mt="md">Tracking Cookies Data</Text>
      </Text>
      <Text mt="md">
        We use cookies and similar tracking technologies to track the activity
        on our Service and we hold certain information.
      </Text>
      <Text mt="md">
        Cookies are files with a small amount of data which may include an
        anonymous unique identifier. Cookies are sent to your browser from a
        website and stored on your device. Other tracking technologies are also
        used such as beacons, tags and scripts to collect and track information
        and to improve and analyze our Service.
      </Text>
      <Text mt="md">
        You can instruct your browser to refuse all cookies or to indicate when
        a cookie is being sent. However, if you do not accept cookies, you may
        not be able to use some portions of our Service.
      </Text>
      <Text mt="md">Examples of Cookies we use:</Text>
      <Text mt="md">
        0.1.{' '}
        <Text span fw="bold">
          Session Cookies:
        </Text>{' '}
        We use Session Cookies to operate our Service.
      </Text>
      <Text mt="md">
        0.2.{' '}
        <Text span fw="bold">
          Preference Cookies:
        </Text>{' '}
        We use Preference Cookies to remember your preferences and various
        settings.
      </Text>
      <Text mt="md">
        0.3.{' '}
        <Text span fw="bold">
          Security Cookies:
        </Text>{' '}
        We use Security Cookies for security purposes.
      </Text>
      <Text mt="md">
        0.4.{' '}
        <Text span fw="bold">
          Advertising Cookies:
        </Text>{' '}
        Advertising Cookies are used to serve you with advertisements that may
        be relevant to you and your interests.
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          Other Data
        </Text>
      </Text>
      <Text mt="md">
        While using our Service, we may also collect the following information:
        sex, age, date of birth, place of birth, passport details, citizenship,
        registration at place of residence and actual address, telephone number
        (work, mobile), details of documents on education, qualification,
        professional training, employment agreements,{' '}
        <Anchor href="https://policymaker.io/non-disclosure-agreement/">
          NDA agreements
        </Anchor>
        , information on bonuses and compensation, information on marital
        status, family members, social security (or other taxpayer
        identification) number, office location and other data.
      </Text>
      <Text mt="md">
        5.{' '}
        <Text span fw="bold">
          Use of Data
        </Text>
      </Text>
      <Text mt="md">
        StickyThoughts uses the collected data for various purposes:
      </Text>
      <Text mt="md">0.1. to provide and maintain our Service;</Text>
      <Text mt="md">0.2. to notify you about changes to our Service;</Text>
      <Text mt="md">
        0.3. to allow you to participate in interactive features of our Service
        when you choose to do so;
      </Text>
      <Text mt="md">0.4. to provide customer support;</Text>
      <Text mt="md">
        0.5. to gather analysis or valuable information so that we can improve
        our Service;
      </Text>
      <Text mt="md">0.6. to monitor the usage of our Service;</Text>
      <Text mt="md">0.7. to detect, prevent and address technical issues;</Text>
      <Text mt="md">
        0.8. to fulfil any other purpose for which you provide it;
      </Text>
      <Text mt="md">
        0.9. to carry out our obligations and enforce our rights arising from
        any contracts entered into between you and us, including for billing and
        collection;
      </Text>
      <Text mt="md">
        0.10. to provide you with notices about your account and/or
        subscription, including expiration and renewal notices,
        email-instructions, etc.;
      </Text>
      <Text mt="md">
        0.11. to provide you with news, special offers and general information
        about other goods, services and events which we offer that are similar
        to those that you have already purchased or enquired about unless you
        have opted not to receive such information;
      </Text>
      <Text mt="md">
        0.12. in any other way we may describe when you provide the information;
      </Text>
      <Text mt="md">0.13. for any other purpose with your consent.</Text>
      <Text mt="md">
        6.{' '}
        <Text span fw="bold">
          Retention of Data
        </Text>
      </Text>
      <Text mt="md">
        We will retain your Personal Data only for as long as is necessary for
        the purposes set out in this Privacy Policy. We will retain and use your
        Personal Data to the extent necessary to comply with our legal
        obligations (for example, if we are required to retain your data to
        comply with applicable laws), resolve disputes, and enforce our legal
        agreements and policies.
      </Text>
      <Text mt="md">
        We will also retain Usage Data for internal analysis purposes. Usage
        Data is generally retained for a shorter period, except when this data
        is used to strengthen the security or to improve the functionality of
        our Service, or we are legally obligated to retain this data for longer
        time periods.
      </Text>
      <Text mt="md">
        7.{' '}
        <Text span fw="bold">
          Transfer of Data
        </Text>
      </Text>
      <Text mt="md">
        Your information, including Personal Data, may be transferred to – and
        maintained on – computers located outside of your state, province,
        country or other governmental jurisdiction where the data protection
        laws may differ from those of your jurisdiction.
      </Text>
      <Text mt="md">
        If you are located outside Philippines and choose to provide information
        to us, please note that we transfer the data, including Personal Data,
        to Philippines and process it there.
      </Text>
      <Text mt="md">
        Your consent to this Privacy Policy followed by your submission of such
        information represents your agreement to that transfer.
      </Text>
      <Text mt="md">
        StickyThoughts will take all the steps reasonably necessary to ensure
        that your data is treated securely and in accordance with this Privacy
        Policy and no transfer of your Personal Data will take place to an
        organisation or a country unless there are adequate controls in place
        including the security of your data and other personal information.
      </Text>
      <Text mt="md">
        8.{' '}
        <Text span fw="bold">
          Disclosure of Data
        </Text>
      </Text>
      <Text mt="md">
        We may disclose personal information that we collect, or you provide:
      </Text>
      <Text mt="md">
        0.1.{' '}
        <Text span fw="bold">
          Disclosure for Law Enforcement.
        </Text>
      </Text>
      <Text mt="md">
        Under certain circumstances, we may be required to disclose your
        Personal Data if required to do so by law or in response to valid
        requests by public authorities.
      </Text>
      <Text mt="md">
        0.2.{' '}
        <Text span fw="bold">
          Business Transaction.
        </Text>
      </Text>
      <Text mt="md">
        If we or our subsidiaries are involved in a merger, acquisition or asset
        sale, your Personal Data may be transferred.
      </Text>
      <Text mt="md">
        0.3.{' '}
        <Text span fw="bold">
          Other cases. We may disclose your information also:
        </Text>
      </Text>
      <Text mt="md">0.3.1. to our subsidiaries and affiliates;</Text>
      <Text mt="md">
        0.3.2. to contractors, service providers, and other third parties we use
        to support our business;
      </Text>
      <Text mt="md">
        0.3.3. to fulfill the purpose for which you provide it;
      </Text>
      <Text mt="md">
        0.3.4. for the purpose of including your company’s logo on our website;
      </Text>
      <Text mt="md">
        0.3.5. for any other purpose disclosed by us when you provide the
        information;
      </Text>
      <Text mt="md">0.3.6. with your consent in any other cases;</Text>
      <Text mt="md">
        0.3.7. if we believe disclosure is necessary or appropriate to protect
        the rights, property, or safety of the Company, our customers, or
        others.
      </Text>
      <Text mt="md">
        9.{' '}
        <Text span fw="bold">
          Security of Data
        </Text>
      </Text>
      <Text mt="md">
        The security of your data is important to us but remember that no method
        of transmission over the Internet or method of electronic storage is
        100% secure. While we strive to use commercially acceptable means to
        protect your Personal Data, we cannot guarantee its absolute security.
      </Text>
      <Text mt="md">
        10.{' '}
        <Text span fw="bold">
          Your Data Protection Rights Under General Data Protection Regulation
          (GDPR)
        </Text>
      </Text>
      <Text mt="md">
        If you are a resident of the European Union (EU) and European Economic
        Area (EEA), you have certain data protection rights, covered by GDPR.
      </Text>
      <Text mt="md">
        We aim to take reasonable steps to allow you to correct, amend, delete,
        or limit the use of your Personal Data.
      </Text>
      <Text mt="md">
        {' '}
        If you wish to be informed what Personal Data we hold about you and if
        you want it to be removed from our systems, please email us at{' '}
        <Text span fw="bold">
          ho.alexander.g@gmail.com
        </Text>
        .
      </Text>
      <Text mt="md">
        In certain circumstances, you have the following data protection rights:
      </Text>
      <Text mt="md">
        0.1. the right to access, update or to delete the information we have on
        you;
      </Text>
      <Text mt="md">
        0.2. the right of rectification. You have the right to have your
        information rectified if that information is inaccurate or incomplete;
      </Text>
      <Text mt="md">
        0.3. the right to object. You have the right to object to our processing
        of your Personal Data;
      </Text>
      <Text mt="md">
        0.4. the right of restriction. You have the right to request that we
        restrict the processing of your personal information;
      </Text>
      <Text mt="md">
        0.5. the right to data portability. You have the right to be provided
        with a copy of your Personal Data in a structured, machine-readable and
        commonly used format;
      </Text>
      <Text mt="md">
        0.6. the right to withdraw consent. You also have the right to withdraw
        your consent at any time where we rely on your consent to process your
        personal information;
      </Text>
      <Text mt="md">
        Please note that we may ask you to verify your identity before
        responding to such requests. Please note, we may not able to provide
        Service without some necessary data.
      </Text>
      <Text mt="md">
        You have the right to complain to a Data Protection Authority about our
        collection and use of your Personal Data. For more information, please
        contact your local data protection authority in the European Economic
        Area (EEA).
      </Text>
      <Text mt="md">
        11.{' '}
        <Text span fw="bold">
          Your Data Protection Rights under the California Privacy Protection
          Act (CalOPPA)
        </Text>
      </Text>
      <Text mt="md">
        CalOPPA is the first state law in the nation to require commercial
        websites and online services to post a privacy policy. The law’s reach
        stretches well beyond California to require a person or company in the
        United States (and conceivable the world) that operates websites
        collecting personally identifiable information from California consumers
        to post a conspicuous privacy policy on its website stating exactly the
        information being collected and those individuals with whom it is being
        shared, and to comply with this policy.
      </Text>
      <Text mt="md">According to CalOPPA we agree to the following:</Text>
      <Text mt="md">0.1. users can visit our site anonymously;</Text>
      <Text mt="md">
        0.2. our Privacy Policy link includes the word “Privacy”, and can easily
        be found on the home page of our website;
      </Text>
      <Text mt="md">
        0.3. users will be notified of any privacy policy changes on our Privacy
        Policy Page;
      </Text>
      <Text mt="md">
        0.4. users are able to change their personal information by emailing us
        at{' '}
        <Text span fw="bold">
          ho.alexander.g@gmail.com
        </Text>
        .
      </Text>
      <Text mt="md">Our Policy on “Do Not Track” Signals:</Text>
      <Text mt="md">
        We honor Do Not Track signals and do not track, plant cookies, or use
        advertising when a Do Not Track browser mechanism is in place. Do Not
        Track is a preference you can set in your web browser to inform websites
        that you do not want to be tracked.
      </Text>
      <Text mt="md">
        You can enable or disable Do Not Track by visiting the Preferences or
        Settings page of your web browser.
      </Text>
      <Text mt="md">
        12.{' '}
        <Text span fw="bold">
          Your Data Protection Rights under the California Consumer Privacy Act
          (CCPA)
        </Text>
      </Text>
      <Text mt="md">
        If you are a California resident, you are entitled to learn what data we
        collect about you, ask to delete your data and not to sell (share) it.
        To exercise your data protection rights, you can make certain requests
        and ask us:
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          0.1. What personal information we have about you. If you make this
          request, we will return to you:
        </Text>
      </Text>
      <Text mt="md">
        0.0.1. The categories of personal information we have collected about
        you.
      </Text>
      <Text mt="md">
        0.0.2. The categories of sources from which we collect your personal
        information.
      </Text>
      <Text mt="md">
        0.0.3. The business or commercial purpose for collecting or selling your
        personal information.
      </Text>
      <Text mt="md">
        0.0.4. The categories of third parties with whom we share personal
        information.
      </Text>
      <Text mt="md">
        0.0.5. The specific pieces of personal information we have collected
        about you.
      </Text>
      <Text mt="md">
        0.0.6. A list of categories of personal information that we have sold,
        along with the category of any other company we sold it to. If we have
        not sold your personal information, we will inform you of that fact.
      </Text>
      <Text mt="md">
        0.0.7. A list of categories of personal information that we have
        disclosed for a business purpose, along with the category of any other
        company we shared it with.
      </Text>
      <Text mt="md">
        Please note, you are entitled to ask us to provide you with this
        information up to two times in a rolling twelve-month period. When you
        make this request, the information provided may be limited to the
        personal information we collected about you in the previous 12 months.
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          0.2. To delete your personal information. If you make this request, we
          will delete the personal information we hold about you as of the date
          of your request from our records and direct any service providers to
          do the same. In some cases, deletion may be accomplished through
          de-identification of the information. If you choose to delete your
          personal information, you may not be able to use certain functions
          that require your personal information to operate.
        </Text>
      </Text>
      <Text mt="md">
        <Text span fw="bold">
          0.3. To stop selling your personal information. We don’t sell or rent
          your personal information to any third parties for any purpose. We do
          not sell your personal information for monetary consideration.
          However, under some circumstances, a transfer of personal information
          to a third party, or within our family of companies, without monetary
          consideration may be considered a “sale” under California law. You are
          the only owner of your Personal Data and can request disclosure or
          deletion at any time.
        </Text>
      </Text>
      <Text mt="md">
        If you submit a request to stop selling your personal information, we
        will stop making such transfers.
      </Text>
      <Text mt="md">
        Please note, if you ask us to delete or stop selling your data, it may
        impact your experience with us, and you may not be able to participate
        in certain programs or membership services which require the usage of
        your personal information to function. But in no circumstances, we will
        discriminate against you for exercising your rights.
      </Text>
      <Text mt="md">
        To exercise your California data protection rights described above,
        please send your request(s) by email:{' '}
        <Text span fw="bold">
          ho.alexander.g@gmail.com
        </Text>
        .
      </Text>
      <Text mt="md">
        Your data protection rights, described above, are covered by the CCPA,
        short for the California Consumer Privacy Act. To find out more, visit
        the official California Legislative Information website. The CCPA took
        effect on 01/01/2020.
      </Text>
      <Text mt="md">
        13.{' '}
        <Text span fw="bold">
          Service Providers
        </Text>
      </Text>
      <Text mt="md">
        We may employ third party companies and individuals to facilitate our
        Service (
        <Text span fw="bold">
          “Service Providers”
        </Text>
        ), provide Service on our behalf, perform Service-related services or
        assist us in analysing how our Service is used.
      </Text>
      <Text mt="md">
        These third parties have access to your Personal Data only to perform
        these tasks on our behalf and are obligated not to disclose or use it
        for any other purpose.
      </Text>
      <Text mt="md">
        14.{' '}
        <Text span fw="bold">
          Analytics
        </Text>
      </Text>
      <Text mt="md">
        We may use third-party Service Providers to monitor and analyze the use
        of our Service.
      </Text>
      <Text mt="md">
        15.{' '}
        <Text span fw="bold">
          CI/CD tools
        </Text>
      </Text>
      <Text mt="md">
        We may use third-party Service Providers to automate the development
        process of our Service.
      </Text>
      <Text mt="md">
        16.{' '}
        <Text span fw="bold">
          Advertising
        </Text>
      </Text>
      <Text mt="md">
        We may use third-party Service Providers to show advertisements to you
        to help support and maintain our Service.
      </Text>
      <Text mt="md">
        17.{' '}
        <Text span fw="bold">
          Behavioral Remarketing
        </Text>
      </Text>
      <Text mt="md">
        We may use remarketing services to advertise on third party websites to
        you after you visited our Service. We and our third-party vendors use
        cookies to inform, optimise and serve ads based on your past visits to
        our Service.
      </Text>
      <Text mt="md">
        18.{' '}
        <Text span fw="bold">
          Links to Other Sites
        </Text>
      </Text>
      <Text mt="md">
        Our Service may contain links to other sites that are not operated by
        us. If you click a third party link, you will be directed to that third
        party’s site. We strongly advise you to review the Privacy Policy of
        every site you visit.
      </Text>
      <Text mt="md">
        We have no control over and assume no responsibility for the content,
        privacy policies or practices of any third party sites or services.
      </Text>
      <Text mt="md">
        For example, the outlined{' '}
        <Anchor href="https://policymaker.io/privacy-policy/">
          privacy policy
        </Anchor>{' '}
        has been made using{' '}
        <Anchor href="https://policymaker.io/">PolicyMaker.io</Anchor>, a free
        tool that helps create high-quality legal documents. PolicyMaker’s{' '}
        <Anchor href="https://policymaker.io/privacy-policy/">
          privacy policy generator
        </Anchor>{' '}
        is an easy-to-use tool for creating a{' '}
        <Anchor href="https://policymaker.io/blog-privacy-policy/">
          privacy policy for blog
        </Anchor>
        , website, e-commerce store or mobile app.
      </Text>
      <Text mt="md">
        19.{' '}
        <Text span fw="bold">
          <Text span fw="bold">
            Children’s Privacy
          </Text>
        </Text>
      </Text>
      <Text mt="md">
        Our Services are not intended for use by children under the age of 18 (
        <Text span fw="bold">
          “Child”
        </Text>{' '}
        or{' '}
        <Text span fw="bold">
          “Children”
        </Text>
        ).
      </Text>
      <Text mt="md">
        We do not knowingly collect personally identifiable information from
        Children under 18. If you become aware that a Child has provided us with
        Personal Data, please contact us. If we become aware that we have
        collected Personal Data from Children without verification of parental
        consent, we take steps to remove that information from our servers.
      </Text>
      <Text mt="md">
        20.{' '}
        <Text span fw="bold">
          Changes to This Privacy Policy
        </Text>
      </Text>
      <Text mt="md">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </Text>
      <Text mt="md">
        We will let you know via email and/or a prominent notice on our Service,
        prior to the change becoming effective and update “effective date” at
        the top of this Privacy Policy.
      </Text>
      <Text mt="md">
        You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page.
      </Text>
      <Text mt="md">
        21.{' '}
        <Text span fw="bold">
          Contact Us
        </Text>
      </Text>
      <Text mt="md">
        If you have any questions about this Privacy Policy, please contact us
        by email:{' '}
        <Text span fw="bold">
          ho.alexander.g@gmail.com
        </Text>
        .
      </Text>
      <Text mt="xl" mb="md" fz="xs">
        This{' '}
        <Anchor href="https://policymaker.io/privacy-policy/" inherit>
          Privacy Policy
        </Anchor>{' '}
        was created for{' '}
        <Text span inherit fw="bold">
          https://stickythoughts.alexndrho.dev/
        </Text>{' '}
        by{' '}
        <Anchor href="https://policymaker.io" inherit>
          PolicyMaker.io
        </Anchor>{' '}
        on 2024-05-07.
      </Text>
    </AppContainer>
  );
}

export default PrivacyPolicy;
