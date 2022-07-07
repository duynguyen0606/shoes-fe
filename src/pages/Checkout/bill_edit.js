
import React from "react"

function Bill_edit(){
return(

    <div>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Bill</title>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />

    <link rel="stylesheet" href="./assets/stylesheets/GlobalStyles.css"/>
    <link rel="stylesheet" href="./assets/stylesheets/sitebar.css"/>
    <link rel="stylesheet" href="./assets/stylesheets/base.css"/>
    <link rel="stylesheet" href="./assets/stylesheets/private/bill.css"/>



    <header class="header"></header>

    <div class="grid wide ">
        <div class="row mt-16">
            <div class="col l-3 m-3 c-3">
               
                <div class="sitebar d-none d-lg-block">
                    <div class="sitebar-wrapper">

                        <div class="sitebar-menu">
                            <p class="sitebar-title">
                                Dashboard
                            </p>
                            <ul class="sitebar-list">
                                <li class="sitebar-item sitebar-item--home">
                                    <a href="/admin-management.html">
                                        <i class="fa-solid fa-house-chimney"></i> Trang chủ
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--revenue">
                                    <a href="/revenue.html">
                                        <i class="fa-solid fa-chart-line"></i> Doanh thu
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div class="sitebar-menu">
                            <p class="sitebar-title">
                                Quick Menu
                            </p>
                            <ul class="sitebar-list">
                                <li class="sitebar-item sitebar-item--staffs">
                                    <a href="#">
                                        <i class="fa-solid fa-user-large"></i> Nhân viên
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--members">
                                    <a href="/customer/index.html">
                                        <i class="fa-solid fa-user-group"></i> Khách hàng
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--products">
                                    <a href="/product/index.html">
                                        <i class="fa-solid fa-shoe-prints"></i> Sản phẩm
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--bills active">
                                    <a href="/bills/index.html">
                                        <i class="fa-solid fa-file-invoice-dollar"></i> Hóa đơn
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--schedules">
                                    <a href="#">
                                        <i class="fa-regular fa-calendar-days"></i> Giỏ hàng
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--materials">
                                    <a href="#">
                                        <i class="fa-solid fa-cubes"></i> Tồn kho
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--received-notes">
                                    <a href="#">
                                        <i class="fa-solid fa-clipboard-list"></i> Phiếu nhập hàng
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--suppliers">
                                    <a href="#">
                                        <i class="fa-solid fa-truck"></i> Nhà cung cấp
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="sitebar-menu">
                            <p class="sitebar-title">
                                Actions
                            </p>
                            <ul class="sitebar-list">
                                <li class="sitebar-item sitebar-item--tables-condition">
                                    <a href="#">
                                        <i class="fa-solid fa-table-cells"></i> Xem lịch đặt hàng
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--order">
                                    <a href="#">
                                        <i class="fa-solid fa-pen-to-square"></i> Đặt hàng
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="sitebar-menu">
                            <p class="sitebar-title">
                                Other
                            </p>
                            <ul class="sitebar-list">
                                <li class="sitebar-item sitebar-item--password">
                                    <a href="/change-password.html">
                                        <i class="fa-solid fa-lock"></i> Đổi mật khẩu
                                    </a>
                                </li>
                                <li class="sitebar-item">
                                    <a href="#">
                                        <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

           
            <div class="col l-8 m-8 c-8 mt-32">
                <div class="bill-edit">
                    <div class="title">
                        Chỉnh sửa hóa đơn
                        <span></span>
                    </div>
                    <a href="/bills/index.html" class="text-danger d-inline-block pt-2">Trở lại</a>
                    <div class="container">
                        <div class="row pt-3">
                            <div class="col-12 col-lg-6 bill-edit__left">
                                <form>
                                    <div class="input-group bill-edit__input-group align-items-center mb-2">
                                        <label for="" class="mb-0 mr-2">Mã khách hàng: </label>
                                        <input type="number" class="form-control bordered" placeholder="Nhập mã khách hàng"/>
                                    </div>
                                    <div class="input-group bill-edit__input-group align-items-center mb-2">
                                        <label for="" class="mb-0 mr-2">Ngày tạo: </label>
                                        <input type="date" class="form-control bordered" placeholder="Nhập ngày tạo"/>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="reset" class="btn btn-lg btn-outline-primary mr-2">Ghi lại</button>
                                        <button type="button" class="btn btn-lg btn-outline-success">Xác nhận</button>
                                    </div>
                                </form>
                            </div>

                            <div class="col-12 col-md-8 offset-md-2 offset-lg-0 col-lg-6 bill-edit__right">
                                <div class="bill-edit__right-heading">
                                    <h5 class="text-center"><strong>T20 store</strong></h5>
                                    <h6 class="text-center"><strong>Hóa đơn</strong></h6>
                                </div>
                                <div class="bill-edit__right-content">

                                    <span></span>
                                    <div class="px-2">
                                        <div class="d-flex justify-content-between pb-1">
                                            <span class="d-inline-block" style="width: 45%;">Mã hóa đơn:</span>
                                            <span class="text-right">HD0001</span>
                                        </div>
                                        <div class="d-flex justify-content-between pb-1">
                                            <span class="d-inline-block" style="width: 45%;">Người tạo:</span>
                                            <span class="text-right">Trần Đức Bo</span>
                                        </div>
                                        <div class="d-flex justify-content-between pb-1">
                                            <span class="d-inline-block" style="width: 45%;">Chi nhánh:</span>
                                            <span class="text-right">Hà Nội</span>
                                        </div>
                                        <div class="d-flex justify-content-between pb-1">
                                            <span class="d-inline-block" style="width: 45%;">Ngày tạo:</span>
                                            <span class="text-right">02/04/2022</span>
                                        </div>
                                    </div>

                                    <span></span>
                                    <div class="px-2">
                                        <div class="d-flex justify-content-between pb-1">
                                            <span class="d-inline-block" style="width: 45%;">Hình thức:</span>
                                            <span class="text-right">Mua trực tiếp</span>
                                        </div>
                                        <div class="d-flex justify-content-between pb-1">
                                            <span class="d-inline-block" style="width: 45%;">Tên khách hàng:</span>
                                            <span class="text-right">Donald Trump</span>
                                        </div>
                                        <div class="d-flex justify-content-between pb-1">
                                            <span class="d-inline-block" style="width: 45%;">Số điện thoại:</span>
                                            <span class="text-right">0123456789</span>
                                        </div>
                                        <div class="d-flex justify-content-between pb-1">
                                            <span class="d-inline-block" style="width: 45%;">Địa chỉ:</span>
                                            <span class="text-right">T20 Shoe, Hà Nội</span>
                                        </div>
                                    </div>

                                    <span></span>
                                    <div class="bill-edit__right-content-detail px-2">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th style="width: 45%">Sản phẩm</th>
                                                    <th style="width: 10%" class="text-center">SL</th>
                                                    <th style="width: 45%" class="text-right">Số tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p class="mb-0">Nike Air Force</p>
                                                        <p class="mb-0 font-italic">1.140.000đ</p>
                                                    </td>
                                                    <td class="text-center">2</td>
                                                    <td class="text-right">2.280.000đ</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <p class="mb-0">Nike Air Max</p>
                                                        <p class="mb-0 font-italic">1.140.000đ</p>
                                                    </td>
                                                    <td class="text-center">2</td>
                                                    <td class="text-right">2.280.000đ</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <p class="mb-0">Nike Max Bolt</p>
                                                        <p class="mb-0 font-italic">1.140.000đ</p>
                                                    </td>
                                                    <td class="text-center">1</td>
                                                    <td class="text-right">2.280.000đ</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <p class="mb-0">Nike White</p>
                                                        <p class="mb-0 font-italic">1.140.000đ</p>
                                                    </td>
                                                    <td class="text-center">2</td>
                                                    <td class="text-right">2.280.000đ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="px-2">
                                        <div class="d-flex justify-content-between pb-1">
                                            <strong>Tạm tính:</strong>
                                            <span>10.120.000</span>
                                        </div>
                                        <div class="d-flex justify-content-between pb-1">
                                            <strong>Chiết khấu:</strong>
                                            <span>-112.000</span>
                                        </div>
                                        <div class="d-flex justify-content-between pb-1">
                                            <strong>Phí ship:</strong>
                                            <span>0</span>
                                        </div>
                                    </div>

                                    <span></span>
                                    <div class="px-2">
                                        <div class="d-flex justify-content-between pb-1">
                                            <strong>Tổng:</strong>
                                            <strong>10.000.000đ</strong>
                                        </div>
                                    </div>

                                    <p class="text-center pt-3">Hẹn gặp lại quý khách</p>
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn btn-lg btn-success">Cập nhật</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>
)
}
export default Bill_edit