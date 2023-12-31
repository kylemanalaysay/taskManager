export const getScreenParent = route => {
    let parent;
    let bottomTabStack = ['Dashboard', 'Projects', 'Profile'];
  
    let singleStack = [
      'Onboarding',
      'Login',
      'SignUp',
      'Reports',
      'Calendar',
      'Tasks',
      'Project',
    ];
  
    if (bottomTabStack.includes(route)) {
      parent = 'BottomTabStack';
    } else if (singleStack.includes(route)) {
      parent = 'SingleStack';
    }
    return parent;
  };