// JavaScript Document

	{{#cars}}
		<div class="cars">
			<h3 class="car-name"> {{Name}} </h3> 
			<div class="carosel-nav">
				<button onclick="changeSlide(-1)"><i class="fa fa-chevron-right"></i></button>
				<button onclick="changeSlide(1)"><i class="fa fa-chevron-left"></i></button>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
			<img src="images/{{Image}}.jpg" class="img-responsive" alt="{{Image}}" />

			<h4 class="car-price">Price: {{Price}} </h4>
			<div class="carosel-nav" style="margin-top:10px;">
				<button onclick="changeSlide(-1)"><i class="fa fa-chevron-right"></i></button>
				<button onclick="changeSlide(1)"><i class="fa fa-chevron-left"></i></button>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
			<p class="car-desc"> {{Description}} </p>
		</div>
	{{/cars}}