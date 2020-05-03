$(document).ready(()=>{
   let txt=$('.heading').html() //get html content
    console.log(`heading text${txt}`)
   let sub_para=$('.paragraph #sub-para').text()//get text value from an element
   console.log(`sub-para ${sub_para}`)

   let src_attr=$('.my-image').attr('src')//get attribute of an element
   console.log(`src ${src_attr}`)

   let new_subpara=`Hey I am not sure what went wrong with the authentication project ,I dropped it
                    even this time too i couldn't make the most of the pagination`
    $('#sub-para').text(new_subpara)//change content of html content

    $('.my-image').attr('src',"pic1.jpg")
   
})