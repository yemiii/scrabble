function Player(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.6;
    this.maxspeed = 10; 
    this.width = 50;
    this.height = 100;


    this.step = function() {
        //movement
        if (this.active) {
            //horizontal movement
            if (!leftKey && !rightKey || leftKey && rightKey) {
                //slowdown
                this.xspeed *= this.friction;
            } else if (rightKey) {
                //move right
                this.xspeed++;
            } else if (leftKey) {
                //move left
                this.xspeed--;
            }

            //vertical movement


            //correct speed


            this.xspeed += this.xspeed;
            this.yspeed += this.yspeed;
        }

    }

    this.draw = function() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}