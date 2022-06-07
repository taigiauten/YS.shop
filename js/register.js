
function dangkytaikhoan(){
    var obj_fullname = document.getElementById('input_fullname');
    validateObj(obj_fullname);
    var obj_email = document.getElementById('input_email');
    validateObj(obj_email);
    var obj_password = document.getElementById('input_password');
    validateObj(obj_password);
    var obj_tel = document.getElementById('input_tel');
    validateObj(obj_tel);

    // lấy đối thượng thuộc tính html
    var field_name_fullname = obj_fullname.getAttribute('field-name');

    list_object_radio = document.querySelectorAll('input[type = "radio"]');
    var gender = 1;
    for (var i = 0; i <  list_object_radio.length; i++) {
        var obj_radio  =  list_object_radio[i];
        var checked = obj_radio.checked;
        console.log(gender);
        if(checked == true){
            gender = obj_radio.value;
        }
    }
    console.log(gender);
}

function validateObj(object){
   var name = object.getAttribute('name');
   var obj_error = document.getElementById('error_' + name);
   var val = object.value;
   var field_name = object.getAttribute('field-name');
   if(val == ''){
      obj_error.innerHTML = 'Bạn chưa nhập ' + field_name;
      obj_error.style.display = 'block';
   }
   else{
      obj_error.innerHTML ='';
      obj_error.style.display ='none';
   }
}