package com.spotback;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstance) {
    // Call before `super.onCreate`
    setTheme(R.style.AppTheme);
    super.onCreate(savedInstance);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
   
  @Override
  protected String getMainComponentName() {
    return "spotback";
  }
}
