/**
 * JSwitchTabs
 * @version 1.0
 * @author AKmatiAK
 * @license BSD0
 */

// there are multiple things you can do with ContGroupFlags and it's corresponding set in Switches.  isSuperset is default action. it's possible to extend this library in future to allow passing action from html attributes etc.
function isSuperset(superset, subset) {
    for (const elem of subset) {
        if (!superset.has(elem)) {
            return false;
        }
    }
    return true;
}

function isSubset(subset, superset) {
    for (const elem of subset) {
        if (!superset.has(elem)) {
            return false;
        }
    }
    return true;
}

function hasDuplicates(set1, set2) {
  for (let item of set1) {
    if (set2.has(item)) {
      return true;
    }
  }
  return false;
}

function switcher() {

    // remove active-btn class from switch panel child buttons, then add active-btn class to new active switch
    function ArrangeClasses() {
        const parent = this.parentElement;
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            child.classList.remove('active-btn');
        }
        this.classList.add('active-btn');
    }
    ArrangeClasses.call(this);

    // create js map for switch flags
    let Switches = new Map();

    // save all active switch flags to Switches
    function CrawlSwitches() {
        document.querySelectorAll('.active-btn[data-switches]').forEach(node => {
            node.dataset.switches.split(/(?<=]) /).forEach(SwGroupStr => {
                //console.log(SwGroupStr);
                const regex = /^(.+)\[/;
                const SwGroup = SwGroupStr.match(regex);
                //console.log(SwGroup[1]);
                const SwitchFlags = SwGroupStr.slice(SwGroup[0].length, -1).split(' ');
                //console.log(SwitchFlags);
                if(Switches.has(SwGroup[1])){
                    Switches.get(SwGroup[1]).add(SwitchFlags)
                }else{
                    Switches.set(SwGroup[1], new Set(SwitchFlags))
                }
            });
        });
    } CrawlSwitches();
    //console.log(Switches);
  
    // main function comparing ContentBlocks and switches map, and based on result sets classes
    function Check() {
        const ContentBlocks = document.querySelectorAll('[data-contents]');
        //console.log(ContentBlocks);

        ContentBlocks.forEach(block => {
            let PassTest = true;

            block.dataset.contents.split(/(?<=]) /).forEach(ContGroupStr => {
                //console.log(ContGroupStr);
                const regex = /^(.+)\[/;
                const ContGroup = ContGroupStr.match(regex);
                //console.log(ContGroup[1]);
                const ContGroupFlags = new Set(ContGroupStr.slice(ContGroup[0].length, -1).split(' '));
                //console.log(ContGroupFlags);
                if (!isSuperset(ContGroupFlags, Switches.get(ContGroup[1]))) {
                    PassTest = false;
                }
            });

            if (PassTest) {
                block.classList.add('active-contents');
            } else {
                block.classList.remove('active-contents');
            }
        });

        Switches.clear();
    } Check();
  
    // if resulting switches combination doesn't exist, select first available
    if (document.querySelector('.active-btn:not(.active-contents)[data-contents]')){
        document.querySelectorAll('.active-btn:not(.active-contents)[data-contents]').forEach(button => {
            button.classList.remove('active-btn');
            button.parentElement.querySelector('.active-contents').classList.add('active-btn');
        });
        CrawlSwitches();
        Check();
    }
}
/* for owl carousel
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('[data-switches].active-btn')?.click();
    document.querySelectorAll('[data-switches]').forEach(button => {
        button.addEventListener('click', () => {
            const owl = $('.owl-carousel');
            owl.trigger('stop.owl.autoplay');
        });
    });
});
*/
document.querySelectorAll('[data-switches]').forEach(button => {
    button.addEventListener('click', switcher);
});
