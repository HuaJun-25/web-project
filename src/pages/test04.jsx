import '../scss/test04.scss'
import hfw1 from '../image/homefwro1.svg'
import hfw2 from '../image/homefwro2.svg'
import { useState, useEffect } from 'react'



const App = () => {

    const [rotated, setRotated] = useState(false);

    useEffect(() => {
        // 設定ticking一個布林值控制
        // 沒有 ticking → 每滾一次就多次旋轉，像在不停按加速鍵
        // 有 ticking → 每次滾輪只允許一次旋轉，動畫平滑
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {   
                setRotated((prev) => prev + 15);
                ticking = true;

                // wheel很容易觸發好幾次所以要靠requestAnimationFrame
                // requestAnimationFrame: 像是一個節流，每次只觸發一次動畫旋轉
                requestAnimationFrame(() => {
                    ticking = false;
                });
            }
        };

        window.addEventListener("wheel", handleScroll);

        return () => window.removeEventListener("wheel", handleScroll);
    }, []);

    return (
        <>
            <div className='inner'>
                <p>Lorem ipsum doro voluptates, dicta pariatur sapiente autem animi harum. Ullam distinctio sapiente possimus ipsam voluptatem, exercitationem consectetur harum dolores reprehenderit sed dolore ipsa eveniet amet! Fugit vero sit iste incidunt placeat sapiente tenetur eius fuga odit. Vitae molestiae recusandae, earum nihil nulla ducimus deserunt doloremque temporibus! Voluptate maxime, labore consectetur architecto, distinctio dicta corrupti ad, deserunt cupiditate similique amet id fuga provident explicabo blanditiis dolorum dolores velit rem. Dolorum rerum odit quidem!</p>
                <div className="h-n-fw">
                    <div className="t fw1"><img src={hfw1} alt="" /></div>
                    <div className='t fw2' style={{ transform: `rotate(${rotated}deg)` }} ><img src={hfw2} alt="" /></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus similique a fugit magni beatae, tempore tenetur ipsam ut reiciendis eligendi officiis doloremque voluptates ullam deserunt iste neque repudiandae quasi ipsa ex culpa, nulla dolores ratione cupiditate. Aliquid ducimus perspiciatis amet, unde, soluta minima possimus, alias doloribus quaerat assumenda voluptas fugiat voluptatibus? Laboriosam odio reprehenderit veniam voluptatem ut! Aspernatur natus vel earum corporis aliquam. Accusantium, sit temporibus molestiae sed deleniti reprehenderit, veniam deserunt sequi numquam recusandae alias nostrum ab aperiam optio doloribus omnis neque dolorem quisquam. Perferendis doloremque consequuntur hic accusantium eveniet tempore! Odio inventore tempora voluptates quibusdam maiores facilis autem deserunt consequatur ab qui numquam rem consectetur quod corrupti similique incidunt, ipsam laudantium debitis sunt dolor blanditiis culpa earum assumenda! Ducimus, voluptas neque! Molestias cupiditate alias laudantium quibusdam, placeat, facere, mollitia nobis consequuntur provident sunt dolores iure hic consectetur ipsam fuga rem nulla tempora reprehenderit voluptatum eos. Maiores obcaecati qui voluptates illum minima iure numquam sunt doloremque perspiciatis harum omnis amet, architecto hic illo, distinctio quas nulla pariatur magni natus reprehenderit deserunt facilis accusamus optio vitae? Quisquam, quidem illum? Harum explicabo eaque ex quod mollitia laudantium voluptatum perspiciatis cupiditate veniam. Impedit voluptatum, porro doloremque similique eum minima molestias autem ipsa non repudiandae aspernatur odio error iure ea praesentium numquam dolorum quidem voluptates, sapiente, debitis delectus quas quasi ut sequi. Consequuntur assumenda exercitationem fuga dolorum. Enim esse quis cupiditate natus architecto sequi debitis quae facilis, dolor illum deleniti ad unde, dolores rem harum, necessitatibus accusantium quos voluptatibus est pariatur consequatur? Tempora magnam reprehenderit consequatur? Est, dignissimos provident impedit officia tenetur ea temporibus velit quidem laborum accusantium? Voluptas minima quas debitis asperiores ratione veritatis! Non provident culpa et neque dolor? At sequi quos nisi accusantium odit consequatur repellat soluta qui quidem dignissimos debitis quibusdam ut quam voluptatibus fugiat quae aliquid, praesentium asperiores facere doloribus ab nesciunt est! Molestias quas maiores nam numquam necessitatibus ex a eum quasi accusantium impedit sapiente commodi repellat modi aut officiis debitis, beatae libero? Qui eos provident sint reprehenderit quos veniam nisi similique, doloremque, id corporis facere tempore amet officia culpa recusandae quis dolore est quae dolores? Minima asperiores eveniet quibusdam, voluptatem veritatis maiores eos architecto? Officia accusantium qui ab doloremque quis saepe iste voluptatem suscipit quibusdam, quod quia. Mollitia ratione architecto voluptate sed culpa veritatis? Porro, quibusdam aspernatur! Soluta ab illum voluptatem, at, beatae error nesciunt similique labore officia, facere natus veniam aspernatur laboriosam iure ea. Est et doloribus nostrum, nulla pariatur odit. Ipsum corporis mollitia soluta impedit eum similique. Aperiam dignissimos dicta iusto consectetur saepe ad recusandae error voluptate voluptates fuga blanditiis in, reprehenderit quam! Dolorum sed voluptate quia! Doloribus similique quibusdam enim sequi veniam adipisci ex minus voluptate, magnam cum unde hic tempora nostrum totam nulla, ea dolorem laudantium nisi illum ipsum aspernatur, voluptatibus qui consequatur. Sint ab doloremque nesciunt aliquam quis accusamus est iure ipsa accusantium, ullam repudiandae nisi perferendis porro corporis recusandae, ipsam facilis inventore incidunt deserunt qui! Vitae, voluptates, consequuntur, voluptatum illum reprehenderit odio blanditiis labore iure modi molestias expedita aspernatur.</p>
            </div>
        </>

    )
}

export default App