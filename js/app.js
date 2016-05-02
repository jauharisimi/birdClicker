var model= {
	currentBird: null,
	admin: false, // hides the admin display area.
	birdinfo:[
		{
			clickCount:0,
			name:"laali",
			imgSrc:"images/bird1-min.png"
		},
		{
			clickCount:0,
			name:"pari",
			imgSrc:"images/bird2-min.png"
		},
		{
			clickCount:0,
			name:"tara",
			imgSrc:"images/bird3-min.png"
		}

	]
};

var octopus = {
	// set current Bird to the first one on the list.
	start: function(){
		model.currentBird = model.birdinfo[0];
		// intialize the views.
		birdView.start();
		birdListView.start();
		adminView.start();
		adminView.hide();
	},
	getCurrentBird: function(){
		return model.currentBird;
	},
	getBirdInfo : function(){
		return model.birdinfo;
	},
	setCurrentBird: function(bird){
		model.currentBird = bird;
	},
	incrementCounter: function(){
		model.currentBird.clickCount++;
		birdView.render();
		adminView.render();
	},
	//function runs when "Admin" button is clicked.
	adminDisplay: function(){
		if  (model.admin === false){
			model.admin = true;
			adminView.show();
		}
		else if(model.admin === true){
			model.admin = false;
			adminView.hide();
		}
	},
	// hide admin display when cancel button is clicked.
	adminCancel: function(){
		adminView.hide();
	},
	// hides admin display and saves new cat data when save button is clicked.
	adminSave : function(){
		adminBirdName.value = model.currentBird.name;
		//model.currentBird.name = adminBirdName.value;
		adminBirdUrl.value = model.currentBird.imgSrc;
		//model.currentBird.imgSrc = adminBirdUrl.value;
		model.currentBird.clickCount= adminBirdClicks.value;
		birdView.render();
		birdListView.render();
		adminView.hide();
	}

};

var birdView = {
	start: function(){
		// store our DOM elements for easy access later.
		this.birdElem = document.getElementById('bird');
		this.birdNameElem = document.getElementById('bird-name');
		this.birdImageElem = document.getElementById('bird-img');
		this.birdCountElem = document.getElementById('bird-count');
		// increment the click count for the current bird image selected.
		this.birdImageElem.addEventListener('click', function(){
			octopus.incrementCounter();
		});
		this.render();
	},
	render: function(){
		var currentBird = octopus.getCurrentBird();
		this.birdCountElem.textContent = "Number of Clicks: " + currentBird.clickCount;
		this.birdNameElem.textContent = currentBird.name;
		this.birdImageElem.src = currentBird.imgSrc;
	}
};
var birdListView = {
	start: function(){
		this.birdListElem = document.getElementById('bird-list');
		this.render();
	},
	render: function(){
		var bird, elem, i;
		var birds = octopus.getBirdInfo();
		this.birdListElem.innerHTML ='';
		for(i=0; i< birds.length; i++){
			bird = birds[i];
			//create a DOM element for each cat.
			elem = document.createElement('li');
			elem.textContent = bird.name;
			// when the bird's name in the list is clicked, update the bird's picture.
			elem.addEventListener('click', (function(birdCopy){
				return function(){
					octopus.setCurrentBird(birdCopy);
					birdView.render();
					adminView.render();
				};
			})(bird));
			//append li elements to the list.
			this.birdListElem.appendChild(elem);
		}
	}

};
var adminView={
	start: function(){
		this.adminBirdName = document.getElementById("adminBirdName");
		this.adminBirdUrl = document.getElementById("adminBirdUrl");
		this.adminBirdClicks = document.getElementById("adminBirdClicks");
		this.adminBtn = document.getElementById("adminBtn");
		this.adminCancel = document.getElementById("adminCancel");
		this.adminSave = document.getElementById("adminSave");
		var admin = document.getElementById("admin");
		this.adminBtn.addEventListener("click", function(){
			octopus.adminDisplay();
		});
		this.adminCancel.addEventListener("click", function(){
			octopus.adminCancel();
		});
		this.adminSave.addEventListener("click", function(){
			octopus.adminSave();
		});
		this.render();
	},

	render:function(){
		var currentBird = octopus.getCurrentBird(); //calls current bird
        this.adminBirdName.value = currentBird.name;
        this.adminBirdUrl.value = currentBird.imgSrc;
        this.adminBirdClicks.value = currentBird.clickCount;
	},
	 show: function(){
            admin.style.display = 'block'; //shows the admin div on index.html
    },
        
    hide: function(){
        admin.style.display = 'none';
    }	

};
octopus.start();