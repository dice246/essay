# BFC &amp; 清除浮动

BFC全称”Block Formatting Context”, 中文为“块级格式化上下文”。内部子元素再怎么翻江倒海，翻云覆雨都不会影响外部的元素。
## 哪些元素会形成BFC？

- 根元素
- float属性不为none
- position为absolute或fixed
- display为inline-block, table-cell, table-caption, flex, inline-flex其中的一项
- overflow为auto，scroll或hidden
## 清除浮动
```css
.float_div:after{
	content:".";
	clear:both;
	display:block;
	height:0;
	overflow:hidden;
	visibility:hidden;
}
.float_div{
	zoom:1
} 
```
