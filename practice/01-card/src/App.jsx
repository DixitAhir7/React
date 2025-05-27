
export function Card() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="d-flex artist-card">
                        <div className="content col-4">
                            <div className="img">
                                <img src="/src/assets/kirtidangadhvi.jpeg" alt="" />
                                <div className="info">
                                    <h2>Kirtidan gadhvi</h2>
                                    <p>legendary singer of Gujrat</p>
                                </div>
                            </div>
                        </div>
                        <div className="content col-4">
                            <div className="img">
                                <img src="/src/assets/images.jpeg" alt="" />
                                <div className="info">
                                    <h2>Mayabhai Ahir</h2>
                                    <p>legendary folk singer of Gujrat</p>
                                </div>
                            </div>
                        </div>
                        <div className="content col-4">
                            <div className="img">
                                <img src="/src/assets/gaman santhal.jpg" alt="" />
                                <div className="info">
                                    <h2>Gaman santhal</h2>
                                    <p>bhuvaji</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}