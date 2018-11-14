// https://pixabay.com/fr/pieuvre-silhouette-mer-1563580/
// Auteur : https://pixabay.com/fr/users/Mel--123-3023638/

var Pieuvre = function(terrain)
{
	Mechant.call(this, terrain);
	var instancePieuvre = this;
	this.calques = 4;
	this.espace = 3;
	
	
	this.afficher = function(dessin)
	{
dessin.save();
dessin.translate(instancePieuvre.xPixel, instancePieuvre.yPixel);
dessin.scale(0.2,0.2);
 
     	
// #g101
	dessin.save();
	dessin.transform(1.000000, 0.000000, 0.000000, 1.000000, -29.859780, -311.128260);
	
// #path9
	dessin.beginPath();
	dessin.fillStyle = 'rgb(255, 0, 0)';
	dessin.moveTo(134.910000, 398.620000);
	dessin.bezierCurveTo(129.891200, 400.274800, 124.871000, 401.810500, 119.332000, 401.581800);
	dessin.bezierCurveTo(107.698000, 401.101410, 97.997000, 391.612400, 86.593000, 391.141800);
	dessin.bezierCurveTo(73.602000, 390.605370, 68.184000, 394.791700, 56.785000, 399.015200);
	dessin.bezierCurveTo(50.877500, 401.203900, 43.379000, 398.508490, 37.449000, 398.891790);
	dessin.bezierCurveTo(28.914900, 399.443430, 26.465000, 411.654790, 35.936100, 415.625790);
	dessin.bezierCurveTo(40.478000, 417.530090, 47.387100, 420.644490, 59.078100, 418.513490);
	dessin.bezierCurveTo(66.010500, 417.249890, 74.926100, 409.881190, 81.984100, 409.430690);
	dessin.bezierCurveTo(92.314100, 408.771370, 106.083100, 417.444990, 117.016100, 417.896390);
	dessin.bezierCurveTo(123.992800, 418.184480, 130.299100, 416.026190, 136.660100, 414.144790);
	dessin.bezierCurveTo(136.605600, 413.238910, 136.521320, 412.339790, 136.494620, 411.429790);
	dessin.bezierCurveTo(136.441020, 409.600990, 136.407920, 407.788890, 136.329150, 406.073890);
	dessin.bezierCurveTo(136.250350, 404.358890, 136.119790, 402.761990, 135.832740, 401.335090);
	dessin.bezierCurveTo(135.689220, 400.621610, 135.519020, 399.944690, 135.289060, 399.335890);
	dessin.bezierCurveTo(135.188860, 399.070770, 135.030470, 398.862440, 134.910840, 398.620130);
	dessin.fill();
	
// #path11
	dessin.beginPath();
	dessin.fillStyle = 'rgb(212, 0, 0)';
	dessin.moveTo(134.910000, 398.620000);
	dessin.bezierCurveTo(135.029630, 398.862310, 135.188080, 399.070640, 135.288220, 399.335760);
	dessin.bezierCurveTo(135.518180, 399.944590, 135.688380, 400.621460, 135.831900, 401.334960);
	dessin.bezierCurveTo(136.118950, 402.761960, 136.249560, 404.358860, 136.328310, 406.073760);
	dessin.bezierCurveTo(136.407110, 407.788660, 136.440080, 409.600860, 136.493780, 411.429660);
	dessin.bezierCurveTo(136.520480, 412.339650, 136.604850, 413.238760, 136.659260, 414.144660);
	dessin.bezierCurveTo(141.528260, 412.704360, 146.420860, 411.409460, 151.693260, 411.627160);
	dessin.bezierCurveTo(156.075660, 411.808120, 163.831260, 411.970360, 166.869260, 415.403460);
	dessin.bezierCurveTo(168.888160, 417.684960, 172.937360, 418.434860, 172.447960, 418.414560);
	dessin.bezierCurveTo(172.257090, 418.406560, 172.839050, 417.097660, 172.873450, 417.032360);
	dessin.bezierCurveTo(173.358610, 416.112070, 173.355840, 413.904960, 173.393500, 412.910560);
	dessin.bezierCurveTo(173.500670, 410.081060, 173.972220, 406.108260, 175.095500, 403.482260);
	dessin.bezierCurveTo(166.095500, 399.263360, 155.511500, 393.359260, 144.719500, 395.707560);
	dessin.bezierCurveTo(141.355200, 396.439590, 138.135700, 397.556260, 134.909500, 398.619960);
	dessin.fill();
	
// #path13
	dessin.beginPath();
	dessin.fillStyle = 'rgb(179, 179, 179)';
	dessin.moveTo(204.510000, 311.130000);
	dessin.bezierCurveTo(174.989000, 310.955080, 144.496000, 323.927000, 153.664000, 358.938000);
	dessin.bezierCurveTo(152.687740, 359.178970, 151.919000, 360.002000, 151.725600, 361.035900);
	dessin.bezierCurveTo(134.940600, 358.211400, 96.819600, 352.492400, 92.674600, 371.591900);
	dessin.bezierCurveTo(92.093060, 374.271400, 91.454200, 388.744900, 94.073400, 390.385900);
	dessin.bezierCurveTo(103.061200, 390.710940, 117.035400, 389.009400, 130.823400, 388.979500);
	dessin.bezierCurveTo(144.611400, 388.949600, 156.888400, 389.999200, 164.751400, 393.490900);
	dessin.bezierCurveTo(173.578400, 397.410800, 174.666800, 421.177900, 163.285800, 423.158900);
	dessin.bezierCurveTo(134.489800, 430.632200, 101.392800, 422.955560, 101.392800, 422.955560);
	dessin.bezierCurveTo(101.392800, 422.955560, 96.387300, 428.286860, 97.570600, 433.228560);
	dessin.bezierCurveTo(105.623500, 466.861560, 173.962600, 433.661920, 167.091600, 469.534560);
	dessin.bezierCurveTo(162.470600, 493.658560, 104.817600, 478.958760, 92.181600, 505.347560);
	dessin.bezierCurveTo(88.203100, 513.655560, 91.543360, 530.949560, 91.543360, 539.802560);
	dessin.bezierCurveTo(91.543360, 547.762260, 92.017460, 562.165560, 97.902160, 568.309560);
	dessin.bezierCurveTo(104.054660, 574.733460, 110.433160, 575.590560, 118.846160, 575.590560);
	dessin.bezierCurveTo(156.717160, 575.590560, 127.809760, 529.358560, 151.845160, 512.628560);
	dessin.bezierCurveTo(154.272560, 510.938960, 161.382260, 508.981360, 164.539160, 510.629360);
	dessin.bezierCurveTo(184.397160, 520.996360, 165.446910, 567.241360, 191.203160, 574.924360);
	dessin.bezierCurveTo(240.659160, 589.678360, 192.516060, 511.727360, 220.420160, 502.015360);
	dessin.bezierCurveTo(241.327160, 494.739060, 233.979160, 547.309360, 250.890160, 551.723360);
	dessin.bezierCurveTo(279.384160, 559.161160, 259.517460, 502.116360, 264.837160, 485.453360);
	dessin.bezierCurveTo(273.544860, 458.177360, 290.546160, 517.102360, 294.692160, 519.267360);
	dessin.bezierCurveTo(311.888160, 528.244660, 318.033160, 503.518360, 314.359160, 490.094360);
	dessin.bezierCurveTo(301.927160, 444.664360, 255.334160, 472.236360, 255.334160, 416.519360);
	dessin.bezierCurveTo(255.334160, 404.909360, 262.047560, 394.601360, 263.583960, 383.372360);
	dessin.bezierCurveTo(266.845960, 359.530360, 260.785060, 327.070360, 236.919960, 317.102360);
	dessin.bezierCurveTo(228.021760, 313.386060, 216.341960, 311.199560, 204.511960, 311.129460);
	dessin.fill();
	
// #path15
	dessin.beginPath();
	dessin.fillStyle = 'rgb(230, 230, 230)';
	dessin.moveTo(246.560000, 390.490000);
	dessin.bezierCurveTo(228.013000, 396.945200, 233.191000, 377.075000, 226.206000, 361.196000);
	dessin.bezierCurveTo(218.415700, 343.487000, 203.087000, 356.933900, 200.351000, 335.349000);
	dessin.bezierCurveTo(197.615000, 313.764100, 240.350000, 314.836000, 251.541000, 338.456100);
	dessin.bezierCurveTo(262.732000, 362.076200, 260.537400, 384.549100, 246.560900, 390.490100);
	dessin.fill();
	
// #path17
	dessin.beginPath();
	dessin.fillStyle = 'rgb(230, 230, 230)';
	dessin.moveTo(308.780000, 484.560000);
	dessin.bezierCurveTo(312.477800, 493.359300, 311.331000, 502.946000, 307.879690, 504.527000);
	dessin.bezierCurveTo(304.428380, 506.108000, 303.456390, 497.688800, 299.758590, 488.889000);
	dessin.bezierCurveTo(296.060790, 480.089200, 283.549590, 467.820000, 287.000590, 466.239000);
	dessin.bezierCurveTo(290.451590, 464.658000, 305.082590, 475.760200, 308.779590, 484.559000);
	dessin.fill();
	
// #path19
	dessin.beginPath();
	dessin.fillStyle = 'rgb(230, 230, 230)';
	dessin.moveTo(262.740000, 516.950000);
	dessin.bezierCurveTo(264.529800, 528.168000, 261.690800, 539.559000, 257.350900, 540.335000);
	dessin.bezierCurveTo(253.011000, 541.111000, 254.162500, 530.420700, 252.372700, 519.203000);
	dessin.bezierCurveTo(250.582900, 507.985300, 246.797100, 492.110000, 251.136900, 491.334000);
	dessin.bezierCurveTo(255.476700, 490.558000, 260.950200, 505.733000, 262.739900, 516.951000);
	dessin.fill();
	
// #path21
	dessin.beginPath();
	dessin.moveTo(196.130000, 369.380000);
	dessin.bezierCurveTo(196.130000, 378.851800, 188.776000, 386.530000, 179.705000, 386.530000);
	dessin.bezierCurveTo(170.634000, 386.530000, 163.280000, 378.851600, 163.280000, 369.380000);
	dessin.bezierCurveTo(163.280000, 359.908400, 170.633900, 352.230000, 179.705000, 352.230000);
	dessin.bezierCurveTo(188.776100, 352.230000, 196.130000, 359.908400, 196.130000, 369.380000);
	dessin.fill();
	
// #path23
	dessin.beginPath();
	dessin.fillStyle = 'rgb(242, 242, 242)';
	dessin.moveTo(183.680000, 348.740000);
	dessin.bezierCurveTo(180.466100, 348.740000, 177.578700, 348.660200, 175.075600, 350.369000);
	dessin.bezierCurveTo(175.726970, 350.303100, 177.622500, 349.974100, 178.290400, 349.974100);
	dessin.bezierCurveTo(183.887200, 349.974100, 189.708400, 352.636400, 193.373400, 356.463500);
	dessin.bezierCurveTo(199.621400, 365.389800, 198.620500, 368.332500, 197.153800, 374.211500);
	dessin.bezierCurveTo(198.699800, 371.647700, 199.612200, 368.629000, 199.612200, 365.375500);
	dessin.bezierCurveTo(199.612200, 356.186600, 192.480500, 348.740500, 183.680200, 348.740500);
	dessin.fill();
	
// #path25
	dessin.beginPath();
	dessin.fillStyle = 'rgb(153, 153, 153)';
	dessin.moveTo(175.410000, 390.700000);
	dessin.bezierCurveTo(178.623900, 390.700000, 181.511300, 390.779800, 184.014400, 389.071000);
	dessin.bezierCurveTo(183.363020, 389.136900, 181.467500, 389.465910, 180.799600, 389.465910);
	dessin.bezierCurveTo(175.202800, 389.465910, 169.381600, 386.803610, 165.716600, 382.976510);
	dessin.bezierCurveTo(159.468600, 374.050210, 160.469500, 371.107510, 161.936200, 365.228510);
	dessin.bezierCurveTo(160.390200, 367.792310, 159.477800, 370.811010, 159.477800, 374.064510);
	dessin.bezierCurveTo(159.477800, 383.253410, 166.609500, 390.699510, 175.409800, 390.699510);
	dessin.fill();
	
// #path27
	dessin.beginPath();
	dessin.moveTo(175.870000, 370.400000);
	dessin.bezierCurveTo(175.870000, 376.252600, 176.262320, 380.997000, 175.014250, 380.997000);
	dessin.bezierCurveTo(173.766180, 380.997000, 171.350350, 376.252500, 171.350350, 370.400000);
	dessin.bezierCurveTo(171.350350, 364.547500, 173.766150, 359.803000, 175.014250, 359.803000);
	dessin.bezierCurveTo(176.262350, 359.803000, 175.870000, 364.547400, 175.870000, 370.400000);
	
// #path29
	dessin.beginPath();
	dessin.fillStyle = 'rgba(235, 255, 255, 0.7)';
	dessin.moveTo(176.650000, 368.200000);
	dessin.bezierCurveTo(173.671500, 367.576950, 171.921200, 366.537600, 174.475000, 364.173000);
	dessin.bezierCurveTo(177.080500, 361.760500, 181.996500, 357.697000, 184.433800, 360.002900);
	dessin.bezierCurveTo(187.028900, 362.458100, 187.167200, 365.258300, 186.741600, 366.813300);
	dessin.bezierCurveTo(186.037590, 369.386000, 179.741900, 368.753300, 176.649600, 368.200000);
	dessin.fill();
	
// #path31
	dessin.beginPath();
	dessin.fillStyle = 'rgb(230, 230, 230)';
	dessin.moveTo(208.710000, 539.120000);
	dessin.bezierCurveTo(212.371900, 564.097000, 208.463080, 569.284000, 200.913900, 570.219000);
	dessin.bezierCurveTo(198.759900, 558.255000, 191.570700, 506.820000, 197.106900, 506.429000);
	dessin.bezierCurveTo(201.446800, 505.493020, 206.730800, 525.620000, 208.709900, 539.120000);
	dessin.fill();
	
// #path33
	dessin.beginPath();
	dessin.fillStyle = 'rgb(230, 230, 230)';
	dessin.moveTo(135.040000, 539.770000);
	dessin.bezierCurveTo(134.606630, 553.481000, 136.829600, 566.474000, 123.143000, 567.005000);
	dessin.bezierCurveTo(117.003800, 567.243250, 113.531000, 555.900000, 115.138300, 542.285000);
	dessin.bezierCurveTo(117.806000, 519.688000, 138.859300, 503.468000, 143.496300, 507.675000);
	dessin.bezierCurveTo(147.916700, 511.685300, 135.816300, 515.197700, 135.039700, 539.769000);
	dessin.fill();
	
// #path35
	dessin.beginPath();
	dessin.globalAlpha = 0.9;
	dessin.fillStyle = 'rgb(255, 255, 255)';
	dessin.moveTo(84.185000, 400.040000);
	dessin.bezierCurveTo(75.160100, 400.067000, 69.808000, 404.026300, 64.329000, 407.098900);
	dessin.bezierCurveTo(58.850000, 410.171500, 53.502000, 410.292500, 43.622000, 407.710200);
	dessin.bezierCurveTo(42.135200, 407.414380, 40.524800, 408.557730, 40.241600, 410.110100);
	dessin.bezierCurveTo(39.958400, 411.662470, 41.053580, 413.343900, 42.540400, 413.639500);
	dessin.bezierCurveTo(57.677400, 415.972800, 60.045400, 413.085580, 65.747400, 409.887900);
	dessin.bezierCurveTo(71.449400, 406.690220, 75.991400, 403.223800, 84.185400, 403.199200);
	dessin.bezierCurveTo(87.106400, 403.190200, 91.454600, 405.288600, 96.595400, 407.740600);
	dessin.bezierCurveTo(101.736200, 410.192600, 107.751400, 412.923900, 114.537400, 413.688800);
	dessin.bezierCurveTo(115.329590, 413.773000, 116.123700, 413.096800, 116.204100, 412.269600);
	dessin.bezierCurveTo(116.284500, 411.442400, 115.636870, 410.613400, 114.844700, 410.529500);
	dessin.bezierCurveTo(108.634100, 409.829340, 102.942700, 407.306800, 97.848700, 404.877500);
	dessin.bezierCurveTo(92.754700, 402.448200, 88.344400, 400.027500, 84.185700, 400.039900);
	dessin.fill();
	
// #path37
	dessin.beginPath();
	dessin.globalAlpha = 0.9;
	dessin.strokeStyle = 'rgb(153, 153, 153)';
	dessin.lineWidth = 0.772940;
	dessin.fillStyle = 'rgb(153, 153, 153)';
	dessin.moveTo(110.400000, 574.760000);
	dessin.bezierCurveTo(110.400000, 574.760000, 106.548000, 573.646000, 104.925300, 572.870300);
	dessin.bezierCurveTo(96.575800, 568.879100, 93.457300, 563.077000, 92.361300, 549.494300);
	dessin.bezierCurveTo(91.474940, 538.508300, 90.717000, 523.566300, 90.722100, 517.180300);
	dessin.bezierCurveTo(90.732100, 505.329300, 94.144300, 499.596300, 104.305100, 494.361300);
	dessin.bezierCurveTo(110.099800, 491.375700, 116.291100, 489.719000, 131.645100, 487.044700);
	dessin.bezierCurveTo(147.610100, 484.264200, 150.803100, 483.527300, 156.052100, 481.414100);
	dessin.bezierCurveTo(161.666900, 479.153300, 165.678600, 475.266200, 166.900100, 470.903100);
	dessin.bezierCurveTo(169.462700, 461.751100, 166.274530, 454.946100, 158.265100, 452.472100);
	dessin.bezierCurveTo(153.634500, 451.041800, 148.104100, 450.343900, 138.064100, 449.922700);
	dessin.bezierCurveTo(117.056100, 449.041550, 109.303100, 447.396000, 103.162100, 442.514000);
	dessin.bezierCurveTo(101.802000, 440.662600, 96.780800, 434.426100, 100.756100, 436.793100);
	dessin.bezierCurveTo(107.391500, 439.418300, 117.025100, 440.782700, 136.192100, 441.811800);
	dessin.bezierCurveTo(156.168100, 442.884400, 164.753100, 443.537500, 169.793100, 444.367900);
	dessin.bezierCurveTo(178.446400, 445.793600, 185.206100, 448.754500, 186.665100, 451.758500);
	dessin.bezierCurveTo(189.074300, 456.718300, 190.401700, 470.493500, 189.228500, 478.361500);
	dessin.bezierCurveTo(188.392030, 483.971400, 185.692000, 486.404100, 177.578500, 488.858500);
	dessin.bezierCurveTo(173.587700, 490.065500, 172.652900, 488.683730, 160.796500, 489.869400);
	dessin.bezierCurveTo(137.560500, 492.193000, 109.021500, 488.699300, 101.340500, 513.892400);
	dessin.bezierCurveTo(100.168100, 517.790600, 100.089900, 518.913900, 100.118400, 531.460400);
	dessin.bezierCurveTo(100.146300, 543.739400, 100.252290, 545.238400, 101.382600, 549.331400);
	dessin.bezierCurveTo(103.650600, 557.544500, 106.458800, 562.791400, 110.994600, 567.291400);
	dessin.bezierCurveTo(113.229200, 569.508400, 116.571500, 571.694000, 120.812300, 572.404100);
	dessin.bezierCurveTo(123.592300, 573.169150, 124.954600, 573.504700, 126.647900, 574.319700);
	dessin.bezierCurveTo(125.928810, 575.070510, 110.400900, 574.760100, 110.400900, 574.760100);
	dessin.fill();
	dessin.stroke();
	
// #path39
	dessin.beginPath();
	dessin.globalAlpha = 0.9;
	dessin.fillStyle = 'rgb(153, 153, 153)';
	dessin.moveTo(153.380000, 357.650000);
	dessin.bezierCurveTo(153.077600, 357.160500, 152.622710, 353.798400, 152.315700, 351.009400);
	dessin.bezierCurveTo(151.992170, 348.070300, 152.175200, 343.167300, 152.706440, 340.541400);
	dessin.bezierCurveTo(153.570860, 336.269100, 155.187340, 332.465800, 157.573740, 329.089400);
	dessin.bezierCurveTo(159.029540, 327.029500, 162.489940, 323.512400, 164.567140, 321.981100);
	dessin.bezierCurveTo(166.178540, 320.793200, 170.109440, 318.367500, 170.225940, 318.489100);
	dessin.bezierCurveTo(158.626940, 328.933100, 161.407140, 345.778100, 165.211240, 355.943100);
	dessin.bezierCurveTo(161.842940, 361.601800, 156.764440, 359.909200, 153.380240, 357.650200);
	dessin.fill();
	
// #path41
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.797660, -0.204280, 0.195650, 0.832860, 23.167000, 38.286000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path43
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.796080, 0.023910, -0.022900, 0.831200, 149.880000, 10.519000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path45
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.708220, -0.223760, 0.214300, 0.739470, 53.593000, 80.403000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path47
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.684640, 0.341410, -0.326980, 0.714840, 304.540000, 57.955000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path49
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.660280, 0.178670, -0.171120, 0.689410, 249.690000, 88.582000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path51
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.628810, 0.359980, -0.344770, 0.656560, 338.300000, 79.132000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path53
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.772670, -0.348630, 0.333900, 0.806760, 10.872000, 62.514000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path55
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.690650, -0.146900, 0.140690, 0.721120, 112.900000, 64.778000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path57
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.811070, -0.003310, 0.003170, 0.846860, 155.570000, -1.786700);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path59
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.853230, 0.059790, -0.057260, 0.890880, 171.650000, -31.162000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path61
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.736390, -0.325230, 0.311490, 0.768880, -17.865000, 48.462000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path63
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.747050, -0.375640, 0.359770, 0.780010, -18.406000, 28.512000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path65
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.561090, 0.425570, -0.407590, 0.585840, 330.520000, 21.451000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path67
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.793550, -0.197260, 0.188920, 0.828570, 15.300000, -38.042000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path69
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.798830, 0.243180, -0.232900, 0.834070, 218.030000, -84.415000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path71
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.765420, -0.381980, 0.365840, 0.799190, -84.073000, 12.588000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path73
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.849750, -0.072340, 0.069280, 0.887240, 36.724000, -50.191000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path75
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.828990, -0.140620, 0.134680, 0.865560, -12.801000, -40.819000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path77
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.726090, -0.053290, 0.051040, 0.758130, 53.645000, -0.158540);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path79
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.751490, -0.065380, 0.062620, 0.784650, 26.927000, 2.552100);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path81
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.848170, 0.107080, -0.102560, 0.885600, 170.300000, 11.510000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path83
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.742050, -0.299310, 0.286660, 0.774790, 33.042000, 93.057000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path85
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.717670, -0.042340, 0.040550, 0.749330, 118.530000, 102.410000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path87
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.692480, -0.234310, 0.224410, 0.723030, 47.044000, 136.100000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path89
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.781550, -0.228340, 0.218690, 0.816030, 80.307000, 58.880000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path91
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.656860, 0.142790, -0.136750, 0.685840, 218.170000, 101.910000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path93
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.765940, -0.294540, 0.282090, 0.799740, -63.570000, 123.350000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path95
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.769490, -0.292410, 0.280060, 0.803440, -84.207000, 151.960000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path97
	dessin.save();
	dessin.beginPath();
	dessin.transform(0.731390, -0.395900, 0.379170, 0.763650, -124.650000, 185.730000);
	dessin.globalAlpha = 0.5;
	dessin.fillStyle = 'rgb(128, 128, 0)';
	dessin.moveTo(75.660000, 484.560000);
	dessin.translate(70.710250, 484.582248);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, -0.004495, 3.14608741, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.582248);
	dessin.translate(70.710250, 484.537752);
	dessin.rotate(0.000000);
	dessin.scale(1.000000, 1.000000);
	dessin.arc(0.000000, 0.000000, 4.949800, 3.137098, 6.28768007, 0);
	dessin.scale(1.000000, 1.000000);
	dessin.rotate(-0.000000);
	dessin.translate(-70.710250, -484.537752);
	dessin.fill();
	dessin.restore();
	
// #path99
	dessin.beginPath();
	dessin.globalAlpha = 0.9;
	dessin.moveTo(99.603000, 438.550000);
	dessin.bezierCurveTo(104.747400, 449.684000, 125.971000, 451.364000, 137.986000, 451.882000);
	dessin.bezierCurveTo(147.970800, 452.300780, 153.326000, 452.991600, 157.724000, 454.350100);
	dessin.bezierCurveTo(161.341900, 455.467600, 163.638300, 457.437900, 164.862800, 460.051500);
	dessin.bezierCurveTo(166.087300, 462.665100, 166.285800, 466.105900, 165.099190, 470.343500);
	dessin.bezierCurveTo(164.105460, 473.892500, 160.601790, 477.473300, 155.383790, 479.574400);
	dessin.bezierCurveTo(150.238190, 481.646300, 147.294790, 482.324800, 131.343790, 485.103000);
	dessin.bezierCurveTo(115.945790, 487.784900, 109.498790, 489.477200, 103.473790, 492.581500);
	dessin.bezierCurveTo(98.223190, 495.286700, 94.475390, 498.247400, 92.103790, 502.232000);
	dessin.bezierCurveTo(89.732190, 506.216600, 88.846590, 511.041300, 88.841690, 517.164000);
	dessin.bezierCurveTo(88.836690, 523.716200, 89.581920, 538.604000, 90.472790, 549.645000);
	dessin.bezierCurveTo(91.031450, 556.569000, 92.109990, 561.702000, 94.278590, 565.737000);
	dessin.bezierCurveTo(98.900690, 573.109400, 104.959590, 575.335600, 112.305590, 575.297800);
	dessin.bezierCurveTo(92.197590, 565.593600, 87.297590, 520.719800, 95.318590, 504.329800);
	dessin.bezierCurveTo(97.195690, 501.176300, 100.242290, 498.665200, 105.152190, 496.135600);
	dessin.bezierCurveTo(110.716590, 493.268700, 116.647190, 491.644700, 131.958190, 488.978000);
	dessin.bezierCurveTo(147.936190, 486.195200, 145.766190, 487.460800, 153.923190, 485.067000);
	dessin.bezierCurveTo(163.087290, 482.377500, 169.983190, 477.711300, 172.193190, 471.959000);
	dessin.bezierCurveTo(174.290790, 466.498900, 174.111690, 461.476000, 171.472510, 457.370000);
	dessin.bezierCurveTo(168.833330, 453.264000, 163.789110, 450.266300, 157.094510, 448.759100);
	dessin.bezierCurveTo(138.441510, 445.771100, 131.411510, 449.080170, 115.411510, 445.785900);
	dessin.bezierCurveTo(109.370410, 444.860460, 102.796510, 440.607300, 99.603510, 438.550200);
	dessin.restore();
	dessin.restore();
	dessin.restore();
	dessin.restore();
	dessin.restore();
	dessin.restore();
	dessin.restore();

	}
}

Pieuvre.prototype = Object.create(Mechant.prototype);
Pieuvre.prototype.constructor = Pieuvre;

