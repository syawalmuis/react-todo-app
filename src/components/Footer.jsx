function Footer() {
    return (
        <footer className="absolute bottom-0 w-full left-0 py-1 flex text-center items-center justify-center font-semibold bg-primary text-light-gray ">
            <p className="flex max-sm:flex-col">
                © {new Date().getFullYear()} | All rights reserved{" "}
                <span>
                    by{" "}
                    <a className="font-bold" href="https://ig.me/u/syawalmuiss">
                        @syawalmuiss
                    </a>
                </span>
            </p>
        </footer>
    );
}

export default Footer;
