const reels = [
    {
        username: "shayana.codes",
        profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
        caption: "Building my latest HTML, CSS & JS project 🚀",
        isFollowed: false,
        isLiked: true,
        likeCount: 12450,
        commentCount: 342,
        shareCount: 97,
        video: "https://www.pexels.com/download/video/12893579/"
    },
    {
        username: "frontend.daily",
        profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
        caption: "CSS animations make everything feel smoother ✨",
        isFollowed: true,
        isLiked: false,
        likeCount: 8972,
        commentCount: 210,
        shareCount: 64,
        video: "https://www.pexels.com/download/video/7989854/"
    },
    {
        username: "dev_journey",
        profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
        caption: "Day 48 of learning JavaScript 💻",
        isFollowed: false,
        isLiked: true,
        likeCount: 15630,
        commentCount: 501,
        shareCount: 189,
        video: "https://www.pexels.com/download/video/5495899/"
    },
    {
        username: "travel.vibes",
        profilePhoto: "https://randomuser.me/api/portraits/women/5.jpg",
        caption: "Mountains never disappoint 🌅",
        isFollowed: false,
        isLiked: false,
        likeCount: 18456,
        commentCount: 420,
        shareCount: 133,
        video: "https://www.pexels.com/download/video/31708803/"
    },
    {
        username: "fitness.hub",
        profilePhoto: "https://randomuser.me/api/portraits/men/6.jpg",
        caption: "Small progress every day 💪",
        isFollowed: false,
        isLiked: false,
        likeCount: 10324,
        commentCount: 287,
        shareCount: 82,
        video: "https://www.pexels.com/download/video/20535458/"
    },
    {
        username: "nature.clicks",
        profilePhoto: "https://randomuser.me/api/portraits/women/7.jpg",
        caption: "Peace begins where nature starts 🌿",
        isFollowed: true,
        isLiked: false,
        likeCount: 31267,
        commentCount: 915,
        shareCount: 411,
        video: "https://www.pexels.com/download/video/6701932/"
    }
];
var main = document.querySelector(".allreels")

function adddata() {
    var sum = ''
    reels.forEach((val, idx) => {
        sum = sum + `<div class="reels">
                    <video autoplay loop muted src=${val.video}></video>
                    <div class="bottom">
                        <div class="user">
                            <img src=${val.profilePhoto}
                            <h4>${val.username}</h4>
                            <button class="follow" id=${idx}>${val.isFollowed ? 'Unfollowed' : 'Follow'}</button>
                        </div>
                        <h3>${val.caption}</h3>
                    </div>
                    <div class="right" >
                        <div class="like" id=${idx}>
                            <h3 class="love-icon" icon>${val.isLiked ? '<i class="ri-heart-3-fill red"></i>' : '<i class="ri-heart-3-line"></i>'}</h3>
                            <h6>${val.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h3 class="comment-icon" icon><i class="ri-chat-3-line"></i></h3>
                            <h6>${val.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h3 class="share-icon" icon><i class="ri-share-forward-line"></i></h3>
                            <h6>${val.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h3 class="menu-icon" icon><i class="ri-more-2-fill"></i></h3>
                        </div>
                    </div>
                </div>`

    })
    main.innerHTML = sum
}
adddata();


main.addEventListener("click", function (dets) {
    if (dets.target.className == "like") {
        if (reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        } else {
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true
        }

        adddata()
    }
    if (dets.target.className == "follow") {
        if (reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = false
        } else {
            reels[dets.target.id].isFollowed = true
        }
        adddata()
    }
})


