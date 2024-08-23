# BCTicket
1. 打开terminal(Macbook)或者cmd(Windows)
2. 运行 `git clone https://github.com/ZhouYou528/BCTicket.git`
3. 运行 `cd BCTicket`
4. 运行 `npm install`
5. 修改个人信息，和日期，人数 => https://github.com/ZhouYou528/BCTicket/blob/main/cypress/e2e/ticket.cy.js 可以提前多加几个姓名email然后快速切换（commenting & uncommenting），可以多抢一些票
6. 运行 `npm run cypress:open`
7. 弹出窗口中点击 `E2E Testing`
8. 点击 `Start E2E Testing in Chrome`
9. 点击 `ticket.cy.js`
10. 窗口中会自动选择joffre lake然后自动填写姓名邮箱人数，最后的验证码需要手动输入。最后手动点击确定。如果没有抢到票，程序会自动刷新页面重试最多重试100次，然后需要重新运行
