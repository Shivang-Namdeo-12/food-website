const STORAGE_USER_KEY = 'userAccount';
const STORAGE_ORDERS_KEY = 'placedOrders';


// Load Profile Data
function loadProfile() {
const user = JSON.parse(localStorage.getItem(STORAGE_USER_KEY));


if (!user) { alert('Not logged in'); location.href='index.html'; return; }


p_name.value = user.name || '';
p_email.value = user.email || '';
p_phone.value = user.phone || '';
p_address.value = user.address || '';
p_gender.value = user.gender || '';
p_dob.value = user.dob || '';
p_bio.value = user.bio || '';


if (user.photo) profileImage.src = user.photo;
}
loadProfile();


// Upload Photo
uploadPhoto.addEventListener('change', function(){
const reader = new FileReader();
reader.onload = e => profileImage.src = e.target.result;
reader.readAsDataURL(this.files[0]);
});


// Save Profile
saveProfile.addEventListener('click', () => {
const updated = {
name: p_name.value,
email: p_email.value,
phone: p_phone.value,
address: p_address.value,
gender: p_gender.value,
dob: p_dob.value,
bio: p_bio.value,
photo: profileImage.src
};


localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(updated));
alert('Profile Saved');
});


// Delete Account
deleteAccount.addEventListener('click', () => {
if (confirm('Delete account permanently?')) {
localStorage.removeItem(STORAGE_USER_KEY);
alert('Account Deleted');
location.href='index.html';
}
});


// Back Button
goBack.addEventListener('click', () => location.href='index.html');


// Load Order History
const orders = JSON.parse(localStorage.getItem(STORAGE_ORDERS_KEY)) || [];
orderHistory.innerHTML = orders.length
? orders.map(o => `
<div class='order-item'>
<strong>Order:</strong> ${o.id}<br>
<strong>Total:</strong> ₹${o.total}<br>
<strong>Date:</strong> ${new Date(o.createdAt).toLocaleString()}
</div>
`).join('')
: '<p>No Orders Found</p>';

// Change Password
changePass.addEventListener('click', () => {
    if (newPass.value.length < 4) return alert('Password too short');
    alert('Password Changed (Demo Only)');
});

// Dark Mode Toggle
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
