define([
	"dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    
    // the widgets In Template Mixin adds nested template behaviour.
    "dijit/_WidgetsInTemplateMixin",
    
    "dojo/Evented",
    "dojo/topic",


    "dojo/dom",
    "dojo/dom-construct",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-geometry",
    "dojo/dom-style",
    "dojo/query",
    "dojo/NodeList-dom",


    "dojo/text!./templates/MathUIMenu.html"
    
],
	function(
		declare,
		widgetBase,
		templatedMixin,
		widgetsInTemplateMixin,
		evented,
		topic,

        dom,
        domConstruct,
        domClass,
        domAttr,
        domGeometry,
        domStyle,
        query,
        nodeListDom,

		template
	) {
		return declare([
			widgetBase,
			templatedMixin,
            widgetsInTemplateMixin
		],{
		
		
		 /**
         * the dojo template system needs widgetsInTemplate to be true for nested templates
         */
        widgetsInTemplate: true,
        templateString: template,

        onSetAllDefaultStyle: function() {
          query(".menuBox")
              .removeClass("menuBox-active")
              .removeClass("menuBox-default")
              .addClass("menuBox-default");
        },

        onSetActive: function(name) {
          query(name)
              .removeClass("menuBox-default")
              .addClass("menuBox-active");
        },

		/**
         * prevalidate the input before attempting to post the form.
         */
        onPropertiesClick: function(evt) {
        	topic.publish("menu/properties");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-properties");
        },
        
        onUploadClick: function(evt) {
        	topic.publish("menu/upload");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-uploadData");
        },
        
        onAttributesClick: function(evt) {
        	topic.publish("menu/attributes");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-defineAttributes");
        },
        	
        onSingleValueClick: function(evt) {
        	topic.publish("menu/singleValue");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-singleValue");
        },
        
        onDualValueClick: function(evt) {
        	topic.publish("menu/dualValue");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-dualValue");
        },
        
        onMultiValueClick:function(evt) {
        	topic.publish("menu/multiValue");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-multiValue");
        },
        
        onDefineClick: function(evt) {
        	topic.publish("menu/define");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-defineModel");
        },
			
		onPartitionClick: function(evt) {
        	topic.publish("menu/partition");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-partitionData");
        },
        	
		onTrainClick: function(evt) {
        	topic.publish("menu/train");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-trainModel");
        },
        
        	
		onTestClick: function(evt) {
        	topic.publish("menu/test");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-testModel");
       	},
       
       	onCompareClick: function(evt) {
        	topic.publish("menu/compare");
            this.onSetAllDefaultStyle();
            this.onSetActive(".menu-compareModel");
        }
        
        
		});
		
		
	});
