import '../kwc-particle-burst.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
      .particle-repeater{
          display: flex;
          align-items: center;
          justify-content: center;
      }
      kwc-particle-burst{
            width: 40px;
            height: 40px;
            margin: 0;
            position: absolute;
            background-image: -moz-radial-gradient(45px 45px 45deg, circle cover, red 0%, orange 100%, red 95%);
        	background-image: -webkit-radial-gradient(45px 45px, circle cover, red, orange);
        	background-image: radial-gradient(45px 45px 45deg, circle cover, red 0%, orange 100%, red 95%);
        	border-radius: 50%;
            transition: all 900ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
      }
      kwc-particle-burst.burst{
          width: 0;
          height: 0;
          transition: none;
          animation: none;
      }
    </style>

    <div class="particle-repeater">
        <kwc-particle-burst max-particle-size="30" particle-decay="0.04" gravity="0" initial-velocity="0" particle-speed="20"></kwc-particle-burst>
    </div>
`,

  is: "kwc-particle-burst-demo",

  listeners: {
      'tap': 'balloonBurst',
  },

  balloonBurst: function(e) {
      // var snd = new Audio("../../demo-assets/pop-sound.wav");
      // snd.play();
      setTimeout(function(){
          this.$$('kwc-particle-burst').toggleClass('burst');
          this.$$('kwc-particle-burst').fire('fireAnimation');
      }.bind(this), 50);
      setTimeout(function(){
          this.$$('kwc-particle-burst').toggleClass('burst');
      }.bind(this), 800);
  }
});
