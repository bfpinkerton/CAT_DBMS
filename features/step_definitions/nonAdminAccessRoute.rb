When(/^admin goes to login page$/) do
    visit "https://hudson-chesterfield-41002.herokuapp.com/"
  end
  Then(/^admin puts in username and password$/) do
    fill_in 'input', with: 'test@test.com'
    fill_in 'input', with: '123'
  end 
  Then(/^admin clicks on submit$/) do
    click_button('Submit')
  end
  Then(/^admin clicks on taskbar$/) do
    click_button('leftside-sidebar-toggle')
  end 
  Then(/^Then admin sees register new users button$/) do
    !page.has_content?('Register New User')
  end 