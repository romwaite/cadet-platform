Router.map(function(){
  this.route('landing', {path: '/'} );
  this.route('home', {path: '/home'} );
  this.route('about', {path: '/about'} );
  this.route('contact', {path: '/contact'} );
  this.route('hello', {path: '/hello'});
  this.route('dashboard', {path: '/dashboard'});
});

Router.configure({
  layoutTemplate: 'layout'
});