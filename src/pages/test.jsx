import { useState, useRef, useEffect } from "react";
import '../css/test.css'

const test = () => {
    const containerRef = useRef(null);

    // 狀態：兩條線/slider 的值
    const [value1, setValue1] = useState(30);
    const [value2, setValue2] = useState(70);

    // 正在拖曳哪一條線 (null / "line1" / "line2")
    const activeLine = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const onMouseMove = (e) => {
            if (!activeLine.current) return;

            const rect = container.getBoundingClientRect();
            let percent = ((e.clientX - rect.left) / rect.width) * 100;
            percent = Math.max(0, Math.min(100, percent)); // 限制 0~100

            if (activeLine.current === "value1") setValue1(Math.min(percent, value2 - 1));
            if (activeLine.current === "value2") setValue2(Math.max(percent, value1 + 1));
        };

        const onMouseUp = () => {
            activeLine.current = null;
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [value1, value2]);
    return (
        <>
            <div id="container" ref={containerRef}>
                <div className="img-wrapper">
                    <img src="https://raw.githubusercontent.com/ThomasEgMatthiesen/ThomasEgMatthiesen/refs/heads/main/hosted-assets/before.png" alt="Before" />
                </div>
                <div className="img-wrapper"
                    style={{ clipPath: `inset(0 0 0 ${value1}%)` }}
                >
                    <img src="https://raw.githubusercontent.com/ThomasEgMatthiesen/ThomasEgMatthiesen/refs/heads/main/hosted-assets/after.png" alt="After" />
                </div>
                <div className="img-wrapper"
                    style={{ clipPath: `inset(0 0 0 ${value2}%)` }}
                >
                    <img src="https://i0.wp.com/janstockcoin.com/wp-content/uploads/2021/06/pexels-photo-747964-scaled.jpeg?fit=2560%2C1616&ssl=1" alt="After" />
                </div>
                <div className="line line1"
                    style={{ left: `${value1}%` }}
                    onMouseDown={() => (activeLine.current = "value1")}
                ></div>
                <div className="line line2"
                    style={{ left: `${value2}%` }}
                    onMouseDown={() => (activeLine.current = "value2")}
                ></div>
                {/* <input className="slider" type="range" min="0" max="100" value={value1} onChange={(e) => setValue1(Number(e.target.value), value2 - 1)} />
                <input className="slider2" type="range" min="0" max="100" value={value2} onChange={(e) => setValue2(Number(e.target.value), value1 + 1)} /> */}
            </div>

        </>
    )
}

export default test