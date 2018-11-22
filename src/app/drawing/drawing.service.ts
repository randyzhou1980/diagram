import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  constructor() { 

  }

  drawImage(ctx: CanvasRenderingContext2D, x: number, y: number, src: string) {
    const img = new Image();
    img.src = src;

    img.onload = function() {
      ctx.drawImage(img, x, y, 50, 50);
    }
  }

  drawHorizontalLine(ctx: CanvasRenderingContext2D, startX: number, endX: number, y: number) {
    this.drawLine(ctx, startX, y, endX, y);
  }

  drawVerticalLine(ctx: CanvasRenderingContext2D, startY: number, endY: number, x: number) {
    this.drawLine(ctx, x, startY, x, endY);
  }

  private drawLine(ctx: CanvasRenderingContext2D, componentX: number, componentY: number, x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(componentX, componentY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  }

  clearDrawingArea(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.clearRect(0, 0, width, height);
  }

  clearLine(ctx: CanvasRenderingContext2D, x:number, y:number, width: number) {
    ctx.clearRect(x, y-1, width, 2);
  }
}
