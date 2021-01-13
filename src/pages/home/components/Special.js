import React from 'react'

export default function Special() {
    return (
        <section className="section different" >
            <div className="container">
                <div className="row">
                    <div className="title-different col md-6">
                        <h2>
                            những điều<br />
                            <span>đặc biệt</span> tại cfd
                  </h2>
                        <div className="img-wrap">
                            <div className="img-item img-1">
                                <img src="/img/img-d-1.jpg" alt="" />
                            </div>
                            <div className="img-item img-2">
                                <img src="/img/img-d-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="content-different col-md-6">
                        <div className="content__item">
                            <h2>Không cam kết đầu ra</h2>
                            <p>
                                Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như
                                cả người hướng dẫn và người học không thật sự tâm huyết và cố
                                gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các thành
                                viên tạo ra sản phẩm có giá trị, thay vì cam kết.
                    </p>
                        </div>
                        <div className="content__item">
                            <h2>Không phải một lớp học</h2>
                            <p>
                                CFD không phải một lớp học thuần túy, tất cả thành viên là một
                                team, cùng hổ trợ, chia sẻ và giúp đỡ nhau trong suốt quá
                                trình học và sau này, với sự hướng dẫn tận tâm của các thành
                                viên đồng sáng lập CFD.
                    </p>
                        </div>
                        <div className="content__item">
                            <h2>Không để ai bị bỏ lại phía sau</h2>
                            <p>
                                Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ
                                được đội ngũ CFD kèm cặp đặc biệt, cùng sự hổ trợ từ các thành
                                viên khác trong team. Vì mục tiêu cuối cùng là hoàn thành khóa
                                học thật tốt.
                    </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
