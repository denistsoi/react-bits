/**
 * Use classnames module for manipulating classes
 *
 * https://github.com/JedWatson/classnames
 */

// BAD
get classes () {
  let classes = ['my-component'];

  if (this.state.active) {
    classes.push('my-omponent-active');
  }

  return classes.join(' ');
}

render () {
  return <div className={this.classes} />;
}

// GOOD
render () {
  let classes = {
    'MyComponent': true,
    'MyComponent--active': this.state.active
  };

  return <div className={classnames(classes)} />;
}