import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { FlevelService } from './flevel.service';


@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next){
    let flevel = this.injector.get(FlevelService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzUxMGEyZTllNDAxMGUzOThiNzVmY2JjZDdmOWFlYzgyOTRhMjRkMTA5NTIxZDA5MWJhOTExYzc0MjNhOThjN2RjNTdmY2U1OGQ2OGFhNzQiLCJpYXQiOiIxNjA3MTQ4NjA5LjQyOTI3MCIsIm5iZiI6IjE2MDcxNDg2MDkuNDI5Mjc0IiwiZXhwIjoiMTYzODY4NDYwOS40MjU3NTkiLCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.m1p2AstGvoCMu4ZBK6JAV2hxhKHk1duU0_83Ys18KYr4MBKWGB6120xa4nEsIx8zMMws8gc3KrxZSVVSiYg3jWlScgcNuy9TWVG8zhO5k8O8IIVJ0sblyMpnio1uK5eQhSCil8S1nU-amlxlFC_D-B3ifxt50ARjUzBFAPAAC1DXAoSyGciZEWbQm19U-nPYUoa-AzecPrBW1qMCN_WYLr5fiGG3oG_SfRgGcyeCpKFOnw1Qf_wmJNZ2PT4ZQT7wB04zjF1Ma-LRe7LIUA33_8NKcktA2vUqLI0AD4xDf9Fwm_EWx4bf0NzvRm0X2Y3ncmge-uTsI4qb2w8lwDWpWH_9l8dCK-MYDZ066bGWYXoC8cGS4Zk9Q5UgZy_f86AleCW6rdLqxIIYDC09ky-K-p-KFv37qbRHXJutfeakczNNUZzKPjJykFRUvcJ6vwd1Ho9bW7gJz5LGTuxFO_PaFadJKUoSH4H0IzG1rPdm1-yE68ab51Vav6ml5oFuBKugdQ5hVutg6p-CDfw8eEebomR2PE34AuPJodLsLq2pi9nUuosxUsYxDP2Ka6l0yuuCnzjghJgsPJ_A9vG5S-m_Pi1VHk0hOif2SNoUG1FLoc8p3Xk-7BQBYgulrkrdYFzAiVl33x-8oXoXb-4q3B5wMTLz3iPLJ73iaIZUIU3EQaE'
      }
    })
    return next.handle(tokenizedReq)
  }
}
