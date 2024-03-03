// 获取页面宽度和高度
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

// 创建柳树的容器
var treeContainer = document.createElement('div');
treeContainer.style.position = 'fixed';
treeContainer.style.top = '0';
treeContainer.style.left = '0';
treeContainer.style.width = '100%';
treeContainer.style.height = '100%';
treeContainer.style.pointerEvents = 'none'; // 防止柳树干扰用户交互

// 创建柳树的主干
var trunk = document.createElement('div');
trunk.style.width = '20px';
trunk.style.height = '100px';
trunk.style.backgroundColor = '#8B4513';
trunk.style.position = 'absolute';
trunk.style.left = '50%';
trunk.style.bottom = '0';
trunk.style.transformOrigin = 'bottom center';
trunk.style.transform = 'translateX(-50%)';

// 创建柳树的叶子
var leaf = document.createElement('div');
leaf.style.width = '50px';
leaf.style.height = '50px';
leaf.style.backgroundColor = '#008000';
leaf.style.position = 'absolute';
leaf.style.left = '50%';
leaf.style.bottom = '100px';
leaf.style.borderRadius = '50%';
leaf.style.transformOrigin = 'bottom center';

// 将主干添加到容器中
treeContainer.appendChild(trunk);

// 将叶子添加到容器中
treeContainer.appendChild(leaf);

// 将容器添加到页面中
document.body.appendChild(treeContainer);

// 让叶子随风飘动
var angle = 0;
var frequency = 0.1;
var amplitude = 50;

function update() {
    angle += frequency;
    var yOffset = Math.sin(angle) * amplitude;
    leaf.style.transform = 'translate(-50%, ' + yOffset + 'px)';

    requestAnimationFrame(update);
}

update();
