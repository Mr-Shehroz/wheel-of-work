export default function Footer() {
    return (
        <footer className="bg-[#e8e9ee] text-black px-6 py-12 text-sm md:text-base">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:px-10 items-center space-y-10">

                {/* Logo */}
                <div className="text-center font-bold text-4xl md:text-5xl lg:text-6xl leading-none">
                    <div>WHEEL</div>
                    <div className="text-lg md:text-xl lg:text-2xl font-extrabold">OF</div>
                    <div>WORK</div>
                </div>

                {/* Nav Links in 3 Columns */}
                <div className="grid grid-cols-3 gap-6 text-center text-sm md:text-base lg:text-lg">
                    <div className="space-y-2">
                        <div>This is WoW</div>
                        <div>Freelancers</div>
                        <div>Companies</div>
                        <div>Missions</div>
                    </div>
                    <div className="space-y-2">
                        <div>Engineering</div>
                        <div>Tech</div>
                        <div>Advice</div>
                        <div>Sponsorship</div>
                    </div>
                    <div className="space-y-2">
                        <div>Team</div>
                        <div>Partnerships</div>
                        <div>Blog</div>
                        <div>Contact</div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="text-center text-gray-500 text-xs md:text-sm lg:text-base space-y-1">
                    <p>Wheel of Work</p>
                    <p>hello@wheelofwork.com</p>
                    <p>35a Avenue de la Marne</p>
                    <p>/ 59290 <strong className="text-black">Wasquehal</strong></p>
                    <p>Photo Credit: Jonathan Alexandre</p>
                    <p>Legal notices</p>
                    <p>Protection of personal data</p>
                    <p>General Conditions of Use</p>
                    <p>Cookie management</p>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-400">in</p>
                </div>
            </div>
        </footer>
    );
}
