fixMozillaZIndex=true; //Fixes Z-Index problem  with Mozilla browsers but causes odd scrolling problem, toggle to see if it helps
_menuCloseDelay=500;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;




with(menuStyle=new mm_style()){
bordercolor="#bcd8e8"; borderstyle="none"; borderwidth=1;
fontfamily="Myriad Pro, Verdana, Arial";
fontsize="80%";
fontstyle="normal";
fontweight="normal";
headerbgcolor="#ffffff";
headercolor="#000000";
offbgcolor="#ffffff";
offcolor="#454745";
onbgcolor="#ffffff";
oncolor="#1787db";

outfilter="Fade(duration=0.1)";
overfilter="Fade(duration=0.2);Alpha(opacity=85);Shadow(color=#ffffff', Direction=135, Strength=1)";
padding=5;
pagebgcolor="#ebf4fd";
pagecolor="6C6C6C";
separatorcolor="#bcd8e8";
separatorsize=0;
subimage="";
subimagepadding=2;
}

with(milonic=new menuname("applications")){
style=menuStyle;
aI("text=&nbsp; &nbsp;&nbsp; Human Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=applications_human_health.html;separatorcolor=#ffffff;separatorsize=1;borderstyle=solid;borderwidth=1;");
aI("text=&nbsp; &nbsp;&nbsp; Water&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=applications_water.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=applications_food.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Other&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=applications_other.html;separatorcolor=#ffffff;separatorsize=1;");
}

with(milonic=new menuname("services")){
style=menuStyle;
aI("text=&nbsp; &nbsp;&nbsp; How It Works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;;url=services_works.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Technology&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;;url=services_technology.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Analysis&nbsp;&nbsp;&nbsp;;url=services_analysis.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Results&nbsp;&nbsp;&nbsp;;url=services_results.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; FAQ&nbsp;&nbsp;&nbsp;;url=services_faq.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Order&nbsp;&nbsp;&nbsp;;url=services_order.html;separatorcolor=#ffffff;separatorsize=1;");
}

with(milonic=new menuname("projects")){
style=menuStyle;
aI("text=&nbsp; &nbsp;&nbsp; Create A Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=projects_create.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Design A Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=projects_design.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Prepare Specimens&nbsp;&nbsp;&nbsp;;url=projects_prepare.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Order&nbsp;&nbsp;&nbsp;;url=projects_order.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Submit Specimens&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=projects_submit_specimens.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Download Results&nbsp;&nbsp;&nbsp;;url=projects_download_results.html;separatorcolor=#ffffff;separatorsize=1;");
}

with(milonic=new menuname("about")){
style=menuStyle;
aI("text=&nbsp; &nbsp;&nbsp; Company&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=about_company.html;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Leadership&nbsp;&nbsp;&nbsp;;url=about_leadership.html;;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Contact Us&nbsp;&nbsp;&nbsp;;url=about_contact.html;;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Privacy Policy&nbsp;&nbsp;&nbsp;;url=about_privacy.html;;separatorcolor=#ffffff;separatorsize=1;");
aI("text=&nbsp; &nbsp;&nbsp; Terms of Use&nbsp;&nbsp;&nbsp;;url=about_terms.html;;separatorcolor=#ffffff;separatorsize=1;");
}

drawMenus();

