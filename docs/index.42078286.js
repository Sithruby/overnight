var e=document.querySelector(".cursor"),t=document.querySelectorAll(".navLinks");function n(){gsap.timeline().from(".transition-this",{duration:1,opacity:0,stagger:.2,delay:.1})}function a(){gsap.timeline().from(".slide-in",{duration:2,x:-20,opacity:0,stagger:.2},"+=2")}function i(){gsap.timeline().from(".fade-in",{duration:2,opacity:0,delay:1})}function s(){var e=gsap.timeline();let t=new SplitType(".her-name",{types:"words, chars"}).chars;e.from(t,{y:"20%",opacity:0,duration:3,ease:"power4.inOut",stagger:.05,delay:1})}function o(){gsap.timeline().from(".slide-top",{duration:2,opacity:0,y:30,stagger:.2,delay:1})}window.addEventListener("mousemove",function(t){e.style.top=t.pageY+"px",e.style.left=t.pageX+"px"}),t.forEach(t=>{t.addEventListener("mouseleave",()=>{e.classList.remove("link-hover")}),t.addEventListener("click",()=>{e.classList.remove("link-hover")}),t.addEventListener("mouseover",()=>{e.classList.add("link-hover")}),t.addEventListener("mouseleave",()=>{t.classList.remove("link-hovered")}),t.addEventListener("click",()=>{t.classList.remove("link-hovered")}),t.addEventListener("mouseover",()=>{t.classList.add("link-hovered")})}),$(function(){barba.init({sync:!0,transitions:[{async leave(e){var t,n;let a=this.async();(t=gsap.timeline()).to(".loading-screen",{duration:1.2,width:"100%",left:"0%",ease:"Expo.easeInOut"}),t.to(".loading-screen",{duration:1,width:"100%",left:"100%",ease:"Expo.easeInOut",delay:.2}),t.set(".loading-screen",{left:"-100%"}),await (n=n=1e3,new Promise(e=>{setTimeout(()=>{e()},n)})),a()},async enter(e){i(),n(),s(),a(),o()},async once(e){i(),n(),s(),a(),o()},async beforeLeave(e){gsap.timeline().to(".fade-out",{duration:1,opacity:0})}}]}),barba.hooks.enter(()=>{window.scrollTo(0,0)}),barba.hooks.after(()=>{butter.init({cancelOnTouch:!0});var e=document.createElement("script");e.src="public/scripts/main.js",next.container.appendChild(e)})});
//# sourceMappingURL=index.42078286.js.map
