import React, { useRef, useState, useEffect } from "react";
import '../css/test11.css'


const App = () => {

    const cardRef = useRef(null);
    const [moving, setMoving] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [prevX, setPrevX] = useState(0);
    const [prevTime, setPrevTime] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!moving || !cardRef.current) return;

            // 移動卡片
            const newLeft = e.clientX - offset.x;
            const newTop = e.clientY - offset.y;
            cardRef.current.style.left = `${newLeft}px`;
            cardRef.current.style.top = `${newTop}px`;

            // 計算傾斜角度
            const currentTime = Date.now();
            const deltaTime = currentTime - prevTime;
            const deltaX = e.clientX - prevX;
            const velocity = Math.abs(deltaX / deltaTime);
            const maxTilt = 20;
            const tiltAngle = Math.min(velocity * maxTilt, maxTilt);

            cardRef.current.style.transform =
                deltaX > 0 ? `rotate(${tiltAngle}deg)` : `rotate(-${tiltAngle}deg)`;

            setPrevX(e.clientX);
            setPrevTime(currentTime);
        };

        const handleMouseUp = () => {
            if (!cardRef.current) return;
            setMoving(false);
            cardRef.current.classList.remove("active");
            cardRef.current.style.cursor = "grab";
            cardRef.current.style.transform = "none";
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [moving, offset, prevX, prevTime]);

    const handleMouseDown = (e) => {
        if (!cardRef.current) return;
        setMoving(true);

        const rect = cardRef.current.getBoundingClientRect();
        setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });

        cardRef.current.classList.add("active");
        cardRef.current.style.cursor = "grabbing";
        setPrevX(e.clientX);
        setPrevTime(Date.now());
    };

    return (
        <div className="center">
            <div
                ref={cardRef}
                className="card"
                onMouseDown={handleMouseDown} >
                - 不接：官方禁止委託之作品、古風、真人<br />
                - 如需標註 mili/咪哩 都可以<br />
                - 超過付款期限(3日)視同取消委託<br />
                - 工期約為確認匯款後2個月(依實際告知為準)<br />
                - 有修改需求可能會依複雜度延後交稿日期(會事先告知)<br />
                - 未提前告知延期的逾期行為將會全額退費<br />
                - 預計完稿日未包含完稿後確認修改時間<br />
                - 作品會上水印公開，禁止AI商用<br />
                - 圖可依頭貼或排版需求裁切、少量印製贈送收藏，返圖非常感謝🙆<br />
                - 金額大於3000可先匯訂金1000<br />
                - 個人作畫習慣顏色皆會有偏差<br />
                - 可以許願，有不想出現的構圖(側臉NG等)需事先告知<br />
            </div>
        </div>
    );
};

export default App;