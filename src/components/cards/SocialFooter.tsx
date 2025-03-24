"use client"
import React from 'react'
import SocialIcon from '../buttons/SocialIcon'
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { handleSocialClick } from '@/helper/handleSocialClick';

function SocialFooter() {
  return (
    <div className="flex gap-4 mt-4 lg:mt-0">
    <SocialIcon
        icon={<FaInstagram />}
        onClick={() => handleSocialClick('https://www.instagram.com/jlaspiur/')}
      />
      <SocialIcon
        icon={<FaLinkedin />}
        onClick={() => handleSocialClick('https://www.linkedin.com/in/laspiurperezjuan/')}
      />
      <SocialIcon
        icon={<FaGithub />}
        onClick={() => handleSocialClick('https://github.com/JuanLaspiur')}
      />
      <SocialIcon
        icon={<FaYoutube />}
        onClick={() => handleSocialClick('https://www.youtube.com/@cosquinjuan')}
      />
    </div>
  )
}

export default SocialFooter