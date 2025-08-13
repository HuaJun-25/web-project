import "../scss/news.scss"


const App = () => {
    return (
        <>
            {/* 圖片bar */}
            <section className="newsBanner">
                <div className="banner-img">
                    <img src="https://www.gotoju.co.jp/wp-content/themes/main/img/main/img_01.jpg" alt="" />
                </div>
                <div className="banner-img">
                    <img src="https://www.gotoju.co.jp/wp-content/themes/main/img/main/img_01.jpg" alt="" />
                </div>
                <div className="banner-img">
                    <img src="https://www.gotoju.co.jp/wp-content/themes/main/img/main/img_01.jpg" alt="" />
                </div>
            </section>

            {/* 內容 */}
            <section className="content">
                <div className="news">
                    <div>
                        <h2>最新活動 News</h2>
                        <div>
                            <select name="droplocation" id="">
                                <option value="台北市">台北市</option>
                                <option value="新北市">新北市</option>
                                <option value="基隆市">基隆市</option>
                                <option value="桃園縣">桃園縣</option>
                                <option value="新竹縣">新竹縣</option>
                                <option value="新竹市">新竹市</option>
                                <option value="宜蘭縣">宜蘭縣</option>
                            </select>
                        </div>
                    </div>

                    <div className="newsCardWarp">
                        <div className="newsCard">
                            <div className="labledate">
                                <div className="lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        </div>
                        <div className="newsCard">
                            <div className="labledate">
                                <div className="lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        </div>                        <div className="newsCard">
                            <div className="labledate">
                                <div className="lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        </div>                        <div className="newsCard">
                            <div className="labledate">
                                <div className="lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        </div>                        <div className="newsCard">
                            <div className="labledate">
                                <div className="lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        </div>                        <div className="newsCard">
                            <div className="labledate">
                                <div className="lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        </div>
                    </div>
                    <div> 頁碼區 </div>
                </div>

                <div className="discount">
                    <div >
                        <h2>優惠專區</h2>
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        <h2>熱門活動</h2>
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                    </div>
                </div>
            </section>



        </>
    )
}

export default App