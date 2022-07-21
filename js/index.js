$("$update_user").submit((event)=>{
    event.preventDefault();

    var unidexed_array = $(this).serializeArray();
    console.log(unidexed_array);
})