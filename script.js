// Sample artwork data with your provided images
const artworks = [
    // Test Gallery Images
    {
        id: 1,
        imageUrl: "Images/Test Gallery/Dunc1.JPG"
    },
    {
        id: 2,
        imageUrl: "Images/Test Gallery/Dunc2.JPG"
    },
    {
        id: 3,
        imageUrl: "Images/Test Gallery/Dunc3.JPG"
    },
    {
        id: 4,
        imageUrl: "Images/Test Gallery/2024-07-01_20-24-16_1450.png"
    },
    {
        id: 5,
        imageUrl: "Images/Test Gallery/2024-07-04_21-19-17_1802.png"
    },
    {
        id: 6,
        imageUrl: "Images/Test Gallery/2024-07-04_22-53-32_1158.png"
    },
    {
        id: 7,
        imageUrl: "Images/Test Gallery/2024-07-05_01-04-30_4302.png"
    },
    {
        id: 8,
        imageUrl: "Images/Test Gallery/2024-07-05_01-38-23_9328.png"
    },
    {
        id: 9,
        imageUrl: "Images/Test Gallery/2024-07-05_01-52-57_8250.png"
    },
    {
        id: 10,
        imageUrl: "Images/Test Gallery/2024-07-13_01-20-11_8968.png"
    },
    {
        id: 11,
        imageUrl: "Images/Test Gallery/2024-07-16_18-00-45_7319_upscayl_900px_remacri.png"
    },
    {
        id: 12,
        imageUrl: "Images/Test Gallery/c5c50d05-8272-4b8f-ad8d-3dda3a4b0bf7_upscayl_2x_remacri.png"
    },
    {
        id: 13,
        imageUrl: "Images/Test Gallery/Crucio_3.jpeg"
    },
    {
        id: 14,
        imageUrl: "Images/Test Gallery/Dunc1058_2.jpg"
    },
    {
        id: 15,
        imageUrl: "Images/Test Gallery/Dunc1058_3.jpg"
    },
    {
        id: 16,
        imageUrl: "Images/Test Gallery/image (17) (1)_upscayl_2x_remacri.png"
    },
    {
        id: 17,
        imageUrl: "Images/Test Gallery/Jupi_1.jpg"
    },
    {
        id: 18,
        imageUrl: "Images/Test Gallery/Jupi_3.jpg"
    },
    {
        id: 19,
        imageUrl: "Images/Test Gallery/LamarJ123_2.jpg"
    },
    {
        id: 20,
        imageUrl: "Images/Test Gallery/LamarJ123_3.jpg"
    },
    {
        id: 21,
        imageUrl: "Images/Test Gallery/Mister Blue_1.png"
    },
    {
        id: 22,
        imageUrl: "Images/Test Gallery/Mister Blue_2.png"
    },
    {
        id: 23,
        imageUrl: "Images/Test Gallery/Mister Blue_3.png"
    },
    {
        id: 24,
        imageUrl: "Images/Test Gallery/Monkey_1.jfif"
    },
    {
        id: 25,
        imageUrl: "Images/Test Gallery/Monkey_2.jfif"
    },
    {
        id: 26,
        imageUrl: "Images/Test Gallery/N0tEvenCl0se_2.jpeg"
    },
    {
        id: 27,
        imageUrl: "Images/Test Gallery/N0tEvenCl0se_3.jpeg"
    },
    {
        id: 28,
        imageUrl: "Images/Test Gallery/saros_1.jpg"
    },
    {
        id: 29,
        imageUrl: "Images/Test Gallery/Saros_2.jpg"
    },
    {
        id: 30,
        imageUrl: "Images/Test Gallery/Saros_3.jpg"
    },
    {
        id: 31,
        imageUrl: "Images/Test Gallery/StepGnome_1.jpg"
    },
    {
        id: 32,
        imageUrl: "Images/Test Gallery/Thrashpie_1.jpeg"
    },
    {
        id: 33,
        imageUrl: "Images/Test Gallery/Thrashpie_2.jpg"
    },
    {
        id: 34,
        imageUrl: "Images/Test Gallery/Thrashpie_3.jpeg"
    },

    // FARAH Gallery Images
    {
        id: 35,
        imageUrl: "Images/FARAH Gallery/A_breath-taking_highly_detailed_headshot_of_a_striking_goth_ohwx_woman_expertly_captured_by_a_profes_1740589210_1.jpeg"
    },
    {
        id: 36,
        imageUrl: "Images/FARAH Gallery/A_dark_fantasy_painting_of_A_lone_waifu_warrior_stands_atop_a_crumbling_tower_under_Sablemeres_etern_1737674106_1.jpeg"
    },
    {
        id: 37,
        imageUrl: "Images/FARAH Gallery/Medium_shot_portrait_woman_black_victorian_dress_with_high_collar_1740382874_1.jpeg"
    },
    {
        id: 38,
        imageUrl: "Images/FARAH Gallery/output_1fdecd393ad8.jpeg"
    },
    {
        id: 39,
        imageUrl: "Images/FARAH Gallery/output_46dc61380955.jpeg"
    },
    {
        id: 40,
        imageUrl: "Images/FARAH Gallery/output_cf9248b33a60.jpeg"
    },
    {
        id: 41,
        imageUrl: "Images/FARAH Gallery/output_ef9dab977034.jpeg"
    },
    {
        id: 42,
        imageUrl: "Images/FARAH Gallery/output_fe7444fc587e.jpeg"
    },
    {
        id: 43,
        imageUrl: "Images/FARAH Gallery/Persian_Warrior_woman_holding_a_golden_sword_intricately_design_with_Persian_patterns_and_inset_with_1740608585_1.jpeg"
    },
    {
        id: 44,
        imageUrl: "Images/FARAH Gallery/Persian_woman_thick_thighs_harem_pants_belly_dancer_light_shafts_god_rays_Persian_style_palace_bedro_1740382663_1.jpeg"
    },
    {
        id: 45,
        imageUrl: "Images/FARAH Gallery/Portrait_of_a_goth_woman_pale_skin_Victorian_fashion_1741253238_1.jpeg"
    },
    {
        id: 46,
        imageUrl: "Images/FARAH Gallery/Portrait_of_a_woman_pale_skin_Victorian_fashion_1741253526_1.jpeg"
    },
    {
        id: 47,
        imageUrl: "Images/FARAH Gallery/Portrait_of_Persian_woman_1741253432_1.jpeg"
    },
    {
        id: 48,
        imageUrl: "Images/FARAH Gallery/realistic_photo_of_ohwx_woman_realistic_photo_of_ohwx_woman_in_a_museum_setting_wearing_corset_with__1740383111_1.jpeg"
    },
    {
        id: 49,
        imageUrl: "Images/FARAH Gallery/Wednesday_addams_black_minidress_pale_skin_thick_thighs_black_braided_pigtails_hair_dark_eyes_victor_1737563584_1.jpeg"
    },
    {
        id: 50,
        imageUrl: "Images/FARAH Gallery/Wednesday_addams_short_black_minidress_white_collar_pale_skin_thick_thighs_black_braided_pigtails_ha_1737563187_1.jpeg"
    },
    {
        id: 51,
        imageUrl: "Images/FARAH Gallery/woman_35mm_film_grain_Marilyn_Monroe_1736808224.jpeg"
    },
    {
        id: 52,
        imageUrl: "Images/FARAH Gallery/woman_35mm_film_grain_pale_goth_woman_covered_latex_horror_cult_crypt_tomb_dark_1736814040.jpeg"
    },
    {
        id: 53,
        imageUrl: "Images/FARAH Gallery/woman_35mm_film_grain_pale_skin_and_dark_makeup_black_silk_robes_gold_jewellery_prayer_red_pumice_ro_1736812685.jpeg"
    },
    {
        id: 54,
        imageUrl: "Images/FARAH Gallery/woman_35mm_film_grain_skin_painted_black_black_silk_robes_gold_jewellery_prayer_red_pumice_rosary_wi_1736811023.jpeg"
    },
    {
        id: 55,
        imageUrl: "Images/FARAH Gallery/woman_35mm_pink_mohawk_with_shaved_sides_massive_breasts_1736802987.jpeg"
    },
    {
        id: 56,
        imageUrl: "Images/FARAH Gallery/Woman_drinking_coffee_dark_goth_aesthetic_morning_tired_dark_steam_from_coffee_dark_kitchen_with_blu_1736840930.jpeg"
    },
    {
        id: 57,
        imageUrl: "Images/FARAH Gallery/woman_Goth_woman_with_pale_skin_under_the_shade_of_a_black_victorian_lace_black_lingerie_thicc_thigh_1736899928.jpeg"
    },
    {
        id: 58,
        imageUrl: "Images/FARAH Gallery/woman_Goth_woman_with_pale_skin_under_the_shade_of_a_black_victorian_lace_parasol_black_lingerie_thi_1736899004.jpeg"
    },
    {
        id: 59,
        imageUrl: "Images/FARAH Gallery/woman_morning_black_fitted_tshirt_massive_breasts_slim_waist_panties_room_with_black_painted_walls_a_1737399404_1.jpeg"
    },
    {
        id: 60,
        imageUrl: "Images/FARAH Gallery/woman_Psylocke_XMen_puple_leotard_with_red_sash_belt_Purple_strappy_Gloves_and_stockings_Big_athleti_1737377064_1.jpeg"
    },
    {
        id: 61,
        imageUrl: "Images/FARAH Gallery/woman_with_long_dark_brown_hair_huge_breasts_is_wearing_a_pink_latex_button_office_shirt_and_grey_sk_1737073123_1.jpeg"
    },
    
    // Pizzle Gallery Images
    {
        id: 62,
        imageUrl: "Images/Pizzle - Gallery/curvy_woman_wearing_gray_skin_tight_yoga_pants_and_a_gray_cropped_unzipped_hoodie_midriff_and_cleava_1741882404_1.jpeg"
    },
    {
        id: 63,
        imageUrl: "Images/Pizzle - Gallery/curvy_woman_with_large_breasts_hair_in_a_ponytail_view_from_the_side_and_below_looking_back_at_viewe_1741886204_1.jpeg"
    },
    {
        id: 64,
        imageUrl: "Images/Pizzle - Gallery/output_2674c3f549ec.jpeg"
    },
    {
        id: 65,
        imageUrl: "Images/Pizzle - Gallery/photo_of_a_woman_with_wide_hips_and_dark_hair_She_has_a_confident_smirk_on_her_face_wearing_a_tight__1741790133_1 (1).jpeg"
    },
    {
        id: 66,
        imageUrl: "Images/Pizzle - Gallery/woman_laying_a_a_bed_legs_apart_dimly_lit_wearing_a_white_lingerie_bra_and_panty_set_lingerie_lit_up_1741883873_1.jpeg"
    },
    {
        id: 67,
        imageUrl: "Images/Pizzle - Gallery/woman_twisting_her_upper_body_to_take_a_mirror_selfie_of_her_butt_view_from_behind_wearing_skin_tigh_1741798775_1.jpeg"
    },
    {
        id: 68,
        imageUrl: "Images/Pizzle - Gallery/woman_wearing_a_black_lace_bra_and_tiny_thong_accentuating_her_toned_large_glutes_sandal_style_high__1741811305_1.jpeg"
    },
    {
        id: 69,
        imageUrl: "Images/Pizzle - Gallery/woman_wearing_a_deep_plunge_thin_fabric_sundress_and_a_sheer_shawl_draped_from_her_arms_standing_in__1741806074_1.jpeg"
    },
    {
        id: 70,
        imageUrl: "Images/Pizzle - Gallery/woman_wearing_a_loose_deep_plunge_beige_knit_sweater_dress_cleavage_posing_with_one_leg_bent_in_a_ki_1741882668_1.jpeg"
    },
    {
        id: 71,
        imageUrl: "Images/Pizzle - Gallery/woman_wearing_a_matching_blue_Adidas_track_suit_hands_in_pocket_of_hoodie_hoodie_completely_unzipped_1741878607_1.jpeg"
    },
    {
        id: 72,
        imageUrl: "Images/Pizzle - Gallery/woman_wearing_very_short_cut-off_distressed_denim_shorts_and_a_sleeveless_denim_top_large_hoop_earri_1741881858_1.jpeg"
    }
];

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create artwork cards
function createArtworkCard(artwork) {
    return `
        <div class="artwork-card" onclick="openModal('${artwork.imageUrl}')">
            <img src="${artwork.imageUrl}" alt="AI Artwork" loading="lazy">
        </div>
    `;
}

// Function to populate gallery
function populateGallery() {
    const gallery = document.querySelector('.artwork-grid');
    const shuffledArtworks = shuffleArray([...artworks]);
    gallery.innerHTML = shuffledArtworks.map(artwork => createArtworkCard(artwork)).join('');
}

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateGallery();
});

// Add filter functionality
document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all filters
        document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked filter
        button.classList.add('active');
        // Reshuffle and repopulate gallery when filter is clicked
        populateGallery();
    });
});

// Add modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalPrompt = document.getElementById('modalPrompt');
const span = document.getElementsByClassName('close')[0];
let currentImageIndex = 0;

function openModal(imageUrl) {
    modal.style.display = 'block';
    modalImg.src = imageUrl;
    // Find the index of the current image
    currentImageIndex = artworks.findIndex(artwork => artwork.imageUrl === imageUrl);
    modalPrompt.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function navigateImage(direction) {
    const newIndex = (currentImageIndex + direction + artworks.length) % artworks.length;
    currentImageIndex = newIndex;
    modalImg.src = artworks[newIndex].imageUrl;
}

// Add event listeners for navigation buttons
document.querySelector('.prev-btn').addEventListener('click', () => navigateImage(-1));
document.querySelector('.next-btn').addEventListener('click', () => navigateImage(1));

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            navigateImage(-1);
        } else if (event.key === 'ArrowRight') {
            navigateImage(1);
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});

// Close modal when clicking the X
span.onclick = function() {
    closeModal();
}

// Close modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
} 