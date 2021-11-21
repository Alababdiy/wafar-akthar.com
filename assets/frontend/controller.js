$( document ).ready(function() {
if (['/', '', 'index.html', 'index'].includes(page)) {
    
    $("input[name='search']").keyup(function () {
        var filter = jQuery(this).val();
        $("#coupon_cards_list li").each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).slideDown(100);
            }
        });
        setTimeout(function (){
            if($("#coupon_cards_list li:hidden").length==0){
                $("#coupon_not_found_message").hide();
            }
            else{
                $("#coupon_not_found_message").slideDown(100);
            }
        },120)
            
    });
    $(".coupon_btn").click(function(){
        $(this).hide();
        console.log(this.dataset);
        $('#code_lable_'+this.dataset.cid).show();
        
        
        var copyText = document.getElementById('code_value_'+this.dataset.cid);
        var textArea = document.createElement("textarea");
        textArea.value = copyText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        
    });

} else if (['join.html', 'join'].includes(page)) {
    console.log('24');
    changeInputType(document.getElementsByName('license_file')[0], 'file');
    changeInputType(document.getElementsByName('identity_card')[0], 'file');
    $('input[type=text],input[type=email],input[type=tel]').keyup(function (e) {
        console.log('executed');
        if (this.value !== "")
            $(`label[for='${this.id}']`).slideDown(50);
        else
            $(`label[for='${this.id}']`).slideUp(50);
    });

} else if (['about_us.html', 'about_us'].includes(page)) {
    $(function () {
        setTimeout(function () {
            if (searchParams.get('action') === 'contact')
                document.getElementById("contacts1-t").scrollIntoView({behavior: "smooth"});
        },1000);
    });

}


});