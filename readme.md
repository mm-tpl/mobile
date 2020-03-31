# 移动项目

## 准备

需要安装jdk和androidsdk(28)。基于众所周知的原因，使用[androidstudio](https://developer.android.google.cn/studio/)会方便一些。jdk使用openjdk和oraclejdk都可以。

## 权限配置

配置android权限，保证环境变量配置好

```sh
wget https://mmstudio.gitee.io/51-android.rules
sudo mv ./51-android.rules  /etc/udev/rules.d/
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export ANDROID_HOME=$HOME/Android/Sdk
```

## 页面(或组件)

需要注意的事，页面的深度不宜过多，在该项目的示例中，pg004, pg003两个页面在调试时无法切换.

示例页面结构

```
                          app(stack)
                               |
                   -----------------------
                  |                 |     |
                c001(bottom-tab)  pg005 pg006
                  |
       -----------------------
      |                       |
    c002(material-top-tab)  pg002
      |
   -------
  |       |
pg003   pg004
```

### 容器类页面

一个页面可以为一个管理其它页面的容器，也可以是实际显示的页面。使用容器来进行页面地图的组织，容器类页面无tpl，本身不展示，只是普通页面的组织者。

类型|描述
---|---
[压栈式](https://reactnavigation.org/docs/stack-navigator)|压栈式页面组织，一个页面叠压到另一个页面上面
[侧边划出式](https://reactnavigation.org/docs/drawer-navigator)|可使用手势从一侧拖动打开和关闭页面
[底部tab页](https://reactnavigation.org/docs/bottom-tab-navigator)|常用的主页显示形式，底部为tab页，可切换
[增强型底部tab页](https://reactnavigation.org/docs/material-bottom-tab-navigator)|底部为tab页，带手势特效，延迟加载
[顶部tab页](https://reactnavigation.org/docs/material-top-tab-navigator)|顶部为tab页，带手势特效，延迟加载

### 普通页面

用来展示的页面，主要的业务逻辑及用户交互都在这里

### 属性配置

一个页面的属性配置包含两种，一种是当前页面的属性配置，一种是当前容器的属性配置，app只有容器属性配置，普通页面只有当前页面的属性配置，容器类页面兼有其二，但不用担心，它们并不常用。可全部配置于当前页面的config.ts文件中。

#### 压栈式

名称|类型|描述
---|---|---
initialRouteName|容器属性|初始显示页面
screenOptions|容器属性|该容器下所有页面的默认配置
keyboardHandlingEnabled|容器属性|
mode|容器属性|`card`，`modal`
headerMode|容器属性|`float`，`screen`，`none`
title|页面属性|标题
header|页面属性|
headerShown|页面属性|
headerTitle|页面属性|
headerTitleAlign|页面属性|`left`，`center`
headerTitleAllowFontScaling|页面属性|
headerBackAllowFontScaling|页面属性|
headerBackImage|页面属性|
headerBackTitle|页面属性|
headerBackTitleVisible|页面属性|
headerTruncatedBackTitle|页面属性|
headerRight|页面属性|
headerLeft|页面属性|
headerStyle|页面属性|
headerTitleStyle|页面属性|
headerBackTitleStyle|页面属性|
headerLeftContainerStyle|页面属性|
headerRightContainerStyle|页面属性|
headerTitleContainerStyle|页面属性|
headerTintColor|页面属性|
headerPressColorAndroid|页面属性|
headerTransparent|页面属性|
headerBackground|页面属性|
headerStatusBarHeight|页面属性|
cardShadowEnabled|页面属性|
cardOverlayEnabled|页面属性|
cardOverlay|页面属性|
cardStyle|页面属性|
animationEnabled|页面属性|
animationTypeForReplace|页面属性|
gestureEnabled|页面属性|
gestureResponseDistance.horizontal|页面属性|
gestureResponseDistance.vertical|页面属性|
gestureVelocityImpact|页面属性|
gestureDirection|页面属性|
transitionSpec|页面属性|
cardStyleInterpolator|页面属性|
headerStyleInterpolator|页面属性|
gestureVelocityImpact|页面属性|
gestureDirection|页面属性|
transitionSpec|页面属性|
cardStyleInterpolator|页面属性|
headerStyleInterpolator|页面属性|
safeAreaInsets.top|页面属性|
safeAreaInsets.right|页面属性|
safeAreaInsets.bottom|页面属性|
safeAreaInsets.left|页面属性|

#### 侧边划出式

名称|类型|描述
---|---|---
initialRouteName|容器属性|初始显示页面
screenOptions|容器属性|该容器下所有页面的默认配置
backBehavior|容器属性|`android`返回键效果,`initialRoute`返回初始页,`order`按布局显示的顺序，`history`按浏览顺序返回，`none`不响应
drawerPosition|容器属性|`left`或`right`
drawerType|容器属性|几种样式，可选值：`front`，`back`，`slide`，`permanent`
edgeWidth|容器属性|边框宽度
hideStatusBar|容器属性|
statusBarAnimation|容器属性|
keyboardDismissMode|容器属性|
minSwipeDistance|容器属性|
overlayColor|容器属性|
gestureHandlerProps|容器属性|
lazy|容器属性|
sceneContainerStyle|容器属性|
drawerStyle|容器属性|
drawerContent|容器属性|
drawerContentOptions|容器属性|
activeTintColor|容器属性|
activeBackgroundColor|容器属性|
inactiveTintColor|容器属性|
inactiveBackgroundColor|容器属性|
itemStyle|容器属性|
labelStyle|容器属性|
contentContainerStyle|容器属性|
style|容器属性|
title|页面属性|标题
drawerLabel|页面属性|标题
drawerIcon|页面属性|图标
gestureEnabled|页面属性|是否启用手势
unmountOnBlur|页面属性|

#### 底部tab页

名称|类型|描述
---|---|---
initialRouteName|容器属性|初始显示页面
screenOptions|容器属性|该容器下所有页面的默认配置
backBehavior|容器属性|`android`返回键效果,`initialRoute`返回初始页,`order`按布局显示的顺序，`history`按浏览顺序返回，`none`不响应
tabBarPosition|容器属性|tab标签的位置，`top`顶部 `bottom`底部
lazy|容器属性|
tabBar|容器属性|
tabBarOptions.activeTintColor|容器属性|
tabBarOptions.inactiveTintColor|容器属性|
tabBarOptions.showIcon|容器属性|
tabBarOptions.showLabel|容器属性|
tabBarOptions.pressColor|容器属性|
tabBarOptions.pressOpacity|容器属性|
tabBarOptions.scrollEnabled|容器属性|
tabBarOptions.tabStyle|容器属性|
tabBarOptions.indicatorStyle|容器属性|
tabBarOptions.labelStyle|容器属性|
tabBarOptions.iconStyle|容器属性|
tabBarOptions.style|容器属性|
tabBarOptions.allowFontScaling|容器属性|
tabBarOptions.renderIndicator|容器属性|
title|页面属性|标题
tabBarVisible|页面属性|
tabBarIcon|页面属性|图标
tabBarLabel|页面属性|标题
tabBarButton|页面属性|
tabBarAccessibilityLabel|页面属性|
unmountOnBlur|页面属性|

#### 增强型底部tab页

名称|类型|描述
---|---|---
initialRouteName|容器属性|初始显示页面
screenOptions|容器属性|该容器下所有页面的默认配置
backBehavior|容器属性|`android`返回键效果,`initialRoute`返回初始页,`order`按布局显示的顺序，`history`按浏览顺序返回，`none`不响应
tabBarPosition|容器属性|tab标签的位置，`top`顶部 `bottom`底部
shifting|容器属性|
labeled|容器属性|是否显示标题，如果为`false`，则只显示图标
activeColor|容器属性|选中时tab标题和图标的颜色
inactiveColor|容器属性|未选中时的标题和图标的颜色
barStyle|容器属性|
title|页面属性|标题
tabBarIcon|页面属性|图标
tabBarColor|页面属性|颜色，`shifting`为`true`时起作用
tabBarLabel|页面属性|标题
tabBarBadge|页面属性|`true`显示一个点，文字或数字
tabBarAccessibilityLabel|页面属性|

#### 顶部tab页

名称|类型|描述
---|---|---
initialRouteName|容器属性|初始显示页面
screenOptions|容器属性|该容器下所有页面的默认配置
backBehavior|容器属性|`android`返回键效果,`initialRoute`返回初始页,`order`按布局显示的顺序，`history`按浏览顺序返回，`none`不响应
tabBarPosition|容器属性|tab标签的位置，`top`顶部 `bottom`底部
lazy|容器属性|是否延迟加载，`true`时当页面首次展示时才加载
lazyPreloadDistance|容器属性|延迟加载的提前量，详见[官方文档](https://reactnavigation.org/docs/material-top-tab-navigator#lazypreloaddistance)
lazyPlaceholder|容器属性|延迟加载时显示的内容，如果要使用该属性，可以将config.ts修改为config.tsx会更方便.详见[官方文档](https://reactnavigation.org/docs/material-top-tab-navigator#lazyplaceholder)
removeClippedSubviews|容器属性|详见[官方文档](https://reactnavigation.org/docs/material-top-tab-navigator#removeclippedsubviews)
keyboardDismissMode|容器属性|键盘消失的类型，有三个可选项：`auto`,`on-drag`,`none` 详见[官方文档](https://reactnavigation.org/docs/material-top-tab-navigator#keyboarddismissmode)
swipeEnabled|容器属性|是否启用左右滑动切换tab页的手势
swipeVelocityImpact|容器属性|手势滑动的力学参数
timingConfig|容器属性|
duration|容器属性|点击tab标签的动画时长
springConfig.damping|容器属性|切换后的动画弹簧效果参数
springConfig.mass|容器属性|切换后的动画弹簧效果参数
springConfig.stiffness|容器属性|切换后的动画弹簧效果参数
springConfig.restSpeedThreshold|容器属性|切换后的动画弹簧效果参数
springConfig.restDisplacementThreshold|容器属性|切换后的动画弹簧效果参数
springVelocityScale|容器属性|手势参数
initialLayout.width|容器属性|初始宽度
initialLayout.height|容器属性|初始高度
position|容器属性|动画参数
sceneContainerStyle|容器属性|动画参数
style|容器属性|
gestureHandlerProps|容器属性|
pager|容器属性|
tabBar|容器属性|
tabBarOptions.activeTintColor|容器属性|
tabBarOptions.inactiveTintColor|容器属性|
tabBarOptions.showIcon|容器属性|
tabBarOptions.showLabel|容器属性|
tabBarOptions.pressColor|容器属性|
tabBarOptions.pressOpacity|容器属性|
tabBarOptions.scrollEnabled|容器属性|
tabBarOptions.tabStyle|容器属性|
tabBarOptions.indicatorStyle|容器属性|
tabBarOptions.labelStyle|容器属性|
tabBarOptions.iconStyle|容器属性|
tabBarOptions.style|容器属性|
tabBarOptions.allowFontScaling|容器属性|
tabBarOptions.renderIndicator|容器属性|
title|页面属性|标题
tabBarIcon|页面属性|图标
tabBarLabel|页面属性|标题
tabBarAccessibilityLabel|页面属性|
