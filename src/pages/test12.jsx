import { useEffect, useRef, useState } from "react";
import '../css/test12.css'

const Cursor = () => {
    const cursorRefs = useRef([]);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorRefs.current.forEach((item) => {
                if (item) {
                    item.style.top = e.clientY + "px";
                    item.style.left = e.clientX + "px";
                }
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {/* <div className="links">
                <a
                    href="#"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    Custom Cursor
                </a>
            </div> */}

            <div
                className={`cursor big ${hover ? "hover" : ""}`}
                ref={(el) => (cursorRefs.current[0] = el)}
            />
            <div
                className={`cursor small ${hover ? "hover" : ""}`}
                ref={(el) => (cursorRefs.current[1] = el)}
            />
        </>
    )
}

export default Cursor