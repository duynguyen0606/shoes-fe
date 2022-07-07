
import React from "react"

function Bill_detail(){
return(


    
    <div>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    

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
                <div class="bill-detail">
                    <div class="title">
                        Chi tiết hóa đơn
                        <span></span>
                    </div>
                    <a href="/bills/index.html" class="text-danger d-inline-block pt-2">Trở lại</a>
                    <div class="col-12 col-md-6 offset-md-3 pt-2">
                        <div class="bill-detail__heading">
                            <h5 class="text-center"><strong>T20 Shoe</strong></h5>
                            <h6 class="text-center"><strong>Hóa đơn</strong></h6>
                        </div>
                        <div class="bill-detail__content">

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
                                    <span class="text-right">Hồ Chí Minh</span>
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
                                    <span class="text-right">Mua hàng trực tuyến</span>
                                </div>
                                <div class="d-flex justify-content-between pb-1">
                                    <span class="d-inline-block" style="width: 45%;">Tên khách hàng:</span>
                                    <span class="text-right">Joe Biden</span>
                                </div>
                                <div class="d-flex justify-content-between pb-1">
                                    <span class="d-inline-block" style="width: 45%;">Số điện thoại:</span>
                                    <span class="text-right">0123123123</span>
                                </div>
                                <div class="d-flex justify-content-between pb-1">
                                    <span class="d-inline-block" style="width: 45%;">Địa chỉ:</span>
                                    <span class="text-right">T20 Shoe, Tp. Hồ Chí Minh</span>
                                </div>
                            </div>

                            <span></span>
                            <div class="px-2">
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
                                <a href="/bills/edit.html" type="button" class="mx-1 btn btn-lg btn-outline-primary">
                                    <i class="fa-solid fa-pen-to-square"></i> Chỉnh sửa
                                </a>
                                <button type="button" class="mx-1 btn btn-lg btn-outline-danger" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                    <i class="fa-solid fa-trash-can"></i>
                                    Xóa
                                </button>
                                <button type="button" class="mx-1 btn btn-lg btn-outline-info" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                    <i class="fa-solid fa-print"></i>
                                    In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </div>

   

    <div id="delete-modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Xóa hóa đơn?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="delete-modal-body__message" class="modal-body__message">Do you want to delete ?</p>
                </div>
                <div class="modal-footer">
                    <button id="btn-confirm-delete" type="button" class="btn btn-danger">Xác nhận</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                </div>
            </div>
        </div>
    </div>

    <form id="delete-form" name="delete-form" method="POST"></form>

    <div id="print-modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">In hóa đơn?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="print-modal-body__message" class="modal-body__message">Do you want to print ?</p>
                </div>
                <div class="modal-footer">
                    <button id="btn-confirm-print" type="button" class="btn btn-success">Xác nhận</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            const deleteForm = document.getElementById('delete-form')
            const btnDelete = document.getElementById('btn-confirm-delete')
            const deleteModalMessage = document.getElementById('delete-modal-body__message')
            const btnPrint = document.getElementById('btn-confirm-print')
            const printModalMessage = document.getElementById('print-modal-body__message')

            let id;

          
            $('#delete-modal').on('show.bs.modal', function(event) {
                let button = $(event.relatedTarget)
                id = button.data('id')
                deleteModalMessage.innerHTML = `Bạn có thật sự muốn xóa hóa đơn: <strong class="text-danger">${id}</strong> không?`
            })

  
            btnDelete.onclick = function() {
                deleteForm.action = ``
                deleteForm.submit()
            }

            $('#print-modal').on('show.bs.modal', function(event) {
                let button = $(event.relatedTarget)
                id = button.data('id')
                printModalMessage.innerHTML = `Bạn có thật sự muốn in hóa đơn: ${id} không?`
            })

            btnPrint.onclick = function() {
                $('#print-modal').modal('hide')
                console.log('In hóa đơn thành công')
            }
        });
    </script>


</div>
</div>
)
}

export default Bill_detail