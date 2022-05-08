<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading> Bring Transparency to your Finances! </template>
    FinBuddy allows your to bring transparency to what you owe or 
    own with its easy to use ledger. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading> Simple to Use </template>

    - You'll fall in love with the simplicity      

    <br />
    - So easy, you don't even need to complete reading this manual. 
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    - Our Ecosystem is designed to not only throw products 
    in the market, but we constantly seek feedback and 
    keep upgrading.

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

      - We're already 10K+ strong and growing. 

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading> Get in Touch </template>
      You can always reach us at listening@finbuddy.com 
  </WelcomeItem>
</template>
