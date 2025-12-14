export default function Contact() {
    return (
        <section id="contact" className="p-10 bg-white text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form className="max-w-md mx-auto flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="p-3 border rounded"/>
                <input type="email" placeholder="Your Email" className="p-3 border rounded"/>
                <textarea placeholder="Message" className="p-3 border rounded h-32"></textarea>
                <button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700">Send</button>
            </form>
        </section>
    )
}