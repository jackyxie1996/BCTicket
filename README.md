# BCTicket
1. 打开terminal(Macbook)或者cmd(Windows)
2. 运行 `git clone https://github.com/ZhouYou528/BCTicket.git`
3. 运行 `cd BCTicket`
4. 运行 `npm install`
5. 运行 `npm run cypress:open`
6. 弹出窗口中点击 `E2E Testing`
7. 点击 `Start E2E Testing in Chrome`
8. 点击 `ticket.cy.js`
9. 窗口中会自动选择joffre lake然后自动填写姓名邮箱人数，最后的验证码需要手动输入。最后手动点击确定。


在这个file里面修改个人信息和人数日期，可以提前多加几个人
https://github.com/ZhouYou528/BCTicket/blob/main/cypress/e2e/ticket.cy.js

如果没有抢到票，程序会自动刷新页面重试最多重试100次，然后需要重新运行
