var lesson_content = ''

function get_lesson_content(content){
    lesson_content = content;
}

function check_last_symbol(str){
    index = str.length - 1
    if (str[index] != lesson_content[index]){
        add_err();
    }
}

function add_err_counter(){
    console.log('add_err_counter')
}

function err_show(){

}


function add_err(){
    add_err_counter();
}

function start_lesson(){

}