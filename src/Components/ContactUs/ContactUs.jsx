const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="hero h-[80vh] bg-cover bg-center relative" style={{backgroundImage: 'url(https://www.sharebarta.net/wp-content/uploads/2021/01/contact-us.jpg)'}}>
                <div className="hero-overlay absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="mt-6">
                <h1 className="text-3xl font-bold">Get in touch with us</h1>
                <br />
                <hr />
            </div>
            <div className="flex gap-4 mt-4">
                <div className="w-72">
                    <label className="font-semibold">Full Name</label>
                    <input type="text" placeholder="Full Name" className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div className="w-72">
                    <label className="font-semibold">Email</label>
                    <input type="text" placeholder="E-mail" className="mt-1 p-2 w-full border rounded-md" />
                </div>
            </div>
            <div className="mt-4 w-96 ">
                <label className="font-semibold ml-2">Message</label>
                <textarea className="mt-1 p-2 w-full border rounded-md" placeholder="Write Message"></textarea>
            </div>
        </div>
    );
};

export default ContactUs;
