import { FaRegQuestionCircle, FaShoppingCart, FaServer, FaRegWindowMaximize, FaHeadphonesAlt } from 'react-icons/fa';
import { FAQCategory } from '../types/FAQ';
import { IconType } from 'react-icons';

interface FAQCategoryData extends Omit<FAQCategory, 'icon'> {
  icon: IconType;
}

export const faqData: FAQCategoryData[] = [
  {
    id: 'general',
    title: 'General Questions',
    icon: FaRegQuestionCircle,
    faqs: [
      {
        question: 'What is Web Hosting?',
        answer: `Web hosting is the service of storing data that keeps websites up and running for users.\n\nEvery website online has a host server, and almost all use a web host to manage that storage. However, not all web hosts provide the same level of quality.\n\nUptime, data speed, and transfer quantity are the most reliable measures of a host’s success. You can often pay more to get data transferred in higher quantities and at faster speeds. Most web hosts offer unlimited bandwidth and disk space at a speed suitable for small-to-moderate-sized businesses or individuals.\n\nCompanies with large websites may need to seek out a more advanced web host to meet their needs.`
      },
      {
        question: 'What is shared web hosting?',
        answer: ''
      },
      {
        question: 'What is a domain name?',
        answer: ''
      },
      {
        question: 'How can I trust you?',
        answer: ''
      },
      {
        question: "What's hostnin history?",
        answer: ''
      }
    ]
  },
  {
    id: 'billing',
    title: 'Ordering & Billing',
    icon: FaShoppingCart,
    faqs: [
      {
        question: 'How can I order a plan?',
        answer: `To order a plan from hostnin, you have to select the plan you want to book and click on the "Order Now" button on that plan. After that, you'll be redirected to the further process, such as your billing details and payment information.\n\nWhen all the steps are successfully completed, an account will be created and the following services will be activated instantly.`
      },
      {
        question: 'How to Pay?',
        answer: ''
      },
      {
        question: 'Which payment method you accept?',
        answer: ''
      },
      {
        question: 'What billing cycles do you offer?',
        answer: ''
      },
      {
        question: 'What is the refund policy?',
        answer: ''
      }
    ]
  },
  {
    id: 'server',
    title: 'Hosting Server',
    icon: FaServer,
    faqs: [
      {
        question: 'What is disk space and how much do I need?',
        answer: `Disk space is an empty space that you can arrange however you like, just like when you pack your suitcase for a trip or furnish your home. For most websites with text and images, 3-5 GB should be plenty. If users will be downloading large multimedia files or there will be more than 500 visitors per day, you should think about getting a plan with more transfer bandwidth.`
      },
      {
        question: 'Is disk space matter for website speed?',
        answer: ''
      },
      {
        question: 'What is SSL security?',
        answer: ''
      },
      {
        question: 'How can I activate the SSL?',
        answer: ''
      },
      {
        question: 'What is bandwidth and how much do you need?',
        answer: ''
      },
      {
        question: 'What servers do you run?',
        answer: ''
      },
      {
        question: 'How secure are your servers?',
        answer: ''
      },
      {
        question: 'Do you offer Shell Access?',
        answer: ''
      },
      {
        question: 'Can I get root access?',
        answer: ''
      }
    ]
  },
  {
    id: 'panel',
    title: 'Control Panel',
    icon: FaRegWindowMaximize,
    faqs: [
      {
        question: 'What control panel do you offer?',
        answer: `Depending on the packages you purchase from us, we provide a variety of control panels. Cpanel, PokoPanel, Direct Admin, and Plesk are all options.`
      },
      {
        question: 'Is the control panel latest?',
        answer: ''
      },
      {
        question: 'Can I get any demo of control panel?',
        answer: ''
      },
      {
        question: 'Can I change the control panel by my own?',
        answer: ''
      }
    ]
  },
  {
    id: 'support',
    title: 'Support System',
    icon: FaHeadphonesAlt,
    faqs: [
      {
        question: 'What is the support method?',
        answer: `We provide assistance via our Messenger chatbox. Whatsapp for chat and phone calls, as well as the hotline number. In the most technical cases, you can create a ticket through our portal.`
      },
      {
        question: 'When I will get the support?',
        answer: ''
      },
      {
        question: 'How much I need to pay for the support?',
        answer: ''
      },
      {
        question: 'Do you have a team of executives behind you, or are you just one man?',
        answer: ''
      }
    ]
  }
]; 