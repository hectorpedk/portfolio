function test()
{
    const mainMenu = document.querySelector(".main-menu");
    const openButton = document.querySelector(".open-btn");

    if(openButton)
    {
        mainMenu.classList.add("responsive");        
    }
}

function test2()
{
    const mainMenu = document.querySelector(".main-menu");
    const closeButton = document.querySelector(".close-btn");

    if(closeButton)
    {
        mainMenu.classList.remove("responsive");
    }

}