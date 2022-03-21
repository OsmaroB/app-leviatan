$(document).ready(function(){
    getImg();
    $("#btnSearch").click(()=>{
        getImgSearch($("#search").val());
    })
    $("#name_user").keyup(function(event){
        $("#user").text(event.target.value);
    })
    $("#colot-text").change(function (e) { 
        $("#user").css('color', `${$(this).val()}`);
    });
});

const getImg = async ()=>{
    const baseUrl = 'https://api.pexels.com/v1/curated?page=2&per_page=6';
    var apikey = '563492ad6f917000010000016200d3e5129840fca6b3a85a401c83ff';
    const response = await fetch(baseUrl,{
        method: 'GET',
        headers:{
            Accept: 'application/json',
            Authorization: apikey
        }
    });
    const data = await response.json();
    data.photos.map((item)=>{
        $("#blockImg").append(`
        <div class="col-4 img-remove">
            <img
            class="m-2 img-try" 
            src="${item.src.tiny}" 
            alt="photo"
            style="height: 200px; width: 200px; border-radius: 10px; border: black 1px solid;"
            onClick="bgTelephone('${item.src.large}')"
            >
        </div>
        `);
    });
}

const getImgSearch = async (search)=>{
    const baseUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=6`;
    var apikey = '563492ad6f917000010000016200d3e5129840fca6b3a85a401c83ff';
    const response = await fetch(baseUrl,{
        method: 'GET',
        headers:{
            Accept: 'application/json',
            Authorization: apikey
        }
    });
    const data = await response.json();
    $(".img-remove").remove();
    data.photos.map((item)=>{
        // console.log(item.src.original);
        $("#blockImg").append(`
        <div class="col-4 img-remove">
            <img
            class="m-2 img-try" 
            src="${item.src.tiny}" 
            alt="photo"
            style="height: 200px; width: 200px; border-radius: 10px; border: black 1px solid;"
            onClick="bgTelephone('${item.src.large}')"
            >
        </div>
        `);
    });
};

const bgTelephone = (img)=>{
    $("#telephone").css('background-image', `url(${img})`);
}