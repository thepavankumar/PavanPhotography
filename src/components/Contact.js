import React, {useState} from 'react'

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // name validation
  function validateName()  {
    if (name.trim() === '') {
      return 'Please enter your name';
    }
    return '';
  };

  // validation phone
  function validatePhone() {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return 'Phone number should be 10 digits';
    }
    return '';
  }

  //email validation
  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }
    return '';
  };

  // validate subject
  function validateSubject() {
    if (subject.trim() === '') {
      return 'Subject is required';
    }
    return '';
  };

   // validate message
   function validateMessage() {
    if (message.trim() === '') {
      return 'Message is required';
    }
    return '';
  };

    // submit the form
  function handleSubmit(e) {
    e.preventDefault();

    // clear inputs
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');

    
    setSubmitted(true);

    // Perform form submission or further processing here
  };

  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
      Contact Us
    </h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
    Thank you for your interest in my photography services. I would love to hear from you and answer any questions you may have. Please feel free to reach out to me using the contact information provided below.
    </p>
    <form action="#" className="space-y-8" onSubmit={handleSubmit}>
    <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor="name"
        >
          Your Name
        </label>
        <input
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="please enter your Name*"
          required=""
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         {submitted && <div className="text-red-500 mt-1">{validateName()}</div>}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your Phone number
        </label>
        <input
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="please enter your phone number*"
          required=""
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete='on'
        />
         {submitted && <div className="text-red-500 mt-1">{validatePhone()}</div>}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="please enter your email here"
          required=""
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {submitted && <div className="text-red-500 mt-1">{validateEmail()}</div>}
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Subject
        </label>
        <input
          type="text"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Let us know how we can help you"
          required=""
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {submitted && <div className="text-red-500 mt-1">{validateSubject()}</div>}
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {submitted && <div className="text-red-500 mt-1">{validateMessage()}</div>}
      </div>
      <button class="px-4 py-3 mt-4 text-xl text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> Send message</button>
    </form>
  </div>
</section>

  )
}

export default Contact