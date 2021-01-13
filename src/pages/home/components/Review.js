import React from 'react'

export default function Review() {
    return (
        <section className="section comment">
            <div className="container">
                <div className="course">
                    <h2 className="title">Cảm nhận</h2>
                    <h2 className="type">Thành viên</h2>
                </div>
                <div className="comment-box">
                    <div className="inner_comment-box">
                        <div className="item">
                            <div className="text">
                                <div className="text-item it1 js-comment-active">
                                    <div className="info">
                                        <div className="name">
                                            <h2>Tiến Tài</h2>
                                            <p>Thành viên CFD1</p>
                                        </div>
                                        <div className="quotes">
                                            <img src="/img/daunhay.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập
                                        trình front-end qua khóa học. Like cho 4 mentor.
                        </div>
                                    <div className="bottom">
                                        <span className="fb">
                                            <img src="/img/facebook-app-symbol.svg" alt="" />
                                        </span>
                                        <span className="date"> 08/09/2020 </span>
                                    </div>
                                </div>
                                <div className="text-item it2">
                                    <div className="info">
                                        <div className="name">
                                            <h2>Nguyễn Thanh Tùng</h2>
                                            <p>Thành viên CFD1</p>
                                        </div>
                                        <div className="quotes">
                                            <img src="/img/daunhay.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        Khoá học này thực sự rất chất lượng. Mình từ một người làm Sale, chưa biết gì về HTML, CSS, JS, mà giờ code được 1 web hoàn chỉnh. Mentor thì hỗ trợ nhiệt tình, lên lớp học lý thuyết xong là thực chiến luôn, về nhà thì livestream sửa bài, có khi tới 1-2h sáng luôn. Sau khoá học thì được các mentor chia sẻ kinh nghiệm.
                        </div>
                                    <div className="bottom">
                                        <span className="fb">
                                            <img src="/img/facebook-app-symbol.svg" alt="" />
                                        </span>
                                        <span className="date"> 12/09/2020 </span>
                                    </div>
                                </div>
                                <div className="text-item it3">
                                    <div className="info">
                                        <div className="name">
                                            <h2>Nguyễn Anh Tuấn</h2>
                                            <p>Thành viên CFD1</p>
                                        </div>
                                        <div className="quotes">
                                            <img src="/img/daunhay.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        Mình đã từng tự học nhưng bị mất phương hướng trầm trọng, sau khóa học mình đã tự code được 2 dự án riêng, 4 mentor dạy và hỗ trợ học viên rất có tâm, chuyện livestream giải đáp thắc mắc cho học viên tới khuya là thường xuyên. Sau khóa học mình học được cách tạo giao diện sao cho đẹp tinh tế, thân thiện với người dùng.
                        </div>
                                    <div className="bottom">
                                        <span className="fb">
                                            <img src="/img/facebook-app-symbol.svg" alt="" />
                                        </span>
                                        <span className="date"> 21/09/2020 </span>
                                    </div>
                                </div>
                                <div className="text-item it4">
                                    <div className="info">
                                        <div className="name">
                                            <h2>Phạm Thành Trung</h2>
                                            <p>Thành viên CFD1</p>
                                        </div>
                                        <div className="quotes">
                                            <img src="/img/daunhay.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        Các mentor dạy có tâm, nhiệt tình. Mình là người chưa biết html và css, sau khóa học thì mình có thể tự tin code được giao diện theo thiết kế và cả việc xử lí các sự kiện bằng javascript và jquery.
                        </div>
                                    <div className="bottom">
                                        <span className="fb">
                                            <img src="/img/facebook-app-symbol.svg" alt="" />
                                        </span>
                                        <span className="date"> 02/10/2020 </span>
                                    </div>
                                </div>
                            </div>
                            <div className="images">
                                <div className="img">
                                    <img src="/img/member-1.jpg" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img/img-member2.jpg" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img/img-member3.jpg" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img/img-member4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="list-dots">
                        </div>
                        <div className="button button__left" />
                        <div className="button button__right" />
                    </div>
                </div>
            </div>
        </section>
    )
}
