import Swal from "sweetalert2";

const Alert = (type,text) => {
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  })
  .fire({
    icon: type,
    title: text
  });
}

export default Alert