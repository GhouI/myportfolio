import React from 'react'

const ContactMe = () => {
  return (
  <div className="bg-gray-50 h-full py-5">
  <div className="container mx-auto text-center">
    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-green-500 pb-2">Contact</h3>
    <p className="font-medium text-lg mb-8">
      Feel free to reach out to me via email or LinkedIn. I'm always open to new opportunities and connections!
    </p>
    <div className="flex flex-col md:flex-row space-y-6 md:space-x-6">
      {/* Left side (Get in touch) */}
      <div className="md:w-1/2  p-6 rounded-lg ">
        <h1 className="font-extrabold text-xl mb-6">Get in Touch</h1>
        <p className="text-gray-700 text-lg mb-4">
          I'm currently looking for <span className="font-bold">full-time software engineering positions</span>.
          <br />
          If you have an exciting opportunity or just want to connect, please don't hesitate to get in touch with me!
        </p>
      </div>
      {/* Right side (Contact form) */}
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h1 className="font-extrabold text-xl mb-6">Contact Form</h1>
        <div className="text-gray-700">
          <div className="mb-4">
            <label className="font-extrabold">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="font-extrabold">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="font-extrabold">Description</label>
            <textarea
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};


export default ContactMe